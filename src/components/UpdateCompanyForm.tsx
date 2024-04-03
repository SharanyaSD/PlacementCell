import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import storage from "../utilities/storage";

const UpdateCompanyForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialValues = {
    name: "",
    information: "",
    website: "",
  };

  // useEffect(() => {
  //   axios
  //     .get(`${API_BASE_URL}/companies/${id}`)
  //     .then((res) => {
  //       formik.setValues(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching company details:", error);
  //     });
  // }, [id]);

  const onSubmit = (values: any) => {
    axios({
      method: "PUT",
      url: `${API_BASE_URL}/companies/${id}`,
      data: { company: values },
      headers: { Authorization: `Bearer ${storage.getToken()}` },
    })
      .then((res) => {
        console.log("Company updated successfully:", res.data);

        navigate(-1); // Navigate back one step
      })
      .catch((error) => {
        console.error("Error - updating company:", error);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div>
      <h1>Update Company Details</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="information">Information:</label>
          <input
            type="text"
            id="information"
            name="information"
            value={formik.values.information}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Update Company</button>
      </form>
    </div>
  );
};

export default UpdateCompanyForm;
