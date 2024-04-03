import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import {
  Opportunity,
  handleUpdateOpportunity,
  closeOpportunity,
} from "../api/auth";
import storage from "../utilities/storage";

const UpdateOpportunityForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialValues = {
    Status: "",
    NoOfApplications: "",
    Skillset: "",
    Package: "",
  };

  //   useEffect(() => {
  //     axios
  //       .get(`${API_BASE_URL}/opporunities/${id}`)
  //       .then((res) => {
  //         formik.setValues(res.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching opportunity details:", error);
  //       });
  //   }, [id]);

  const onSubmit = (values: any) => {
    axios({
      method: "PUT",
      url: `${API_BASE_URL}/opportunities/${id}`,
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

  //   const UpdateOpportunity = async (id :Number) => {
  //     try {
  //       await handleUpdateOpportunity(id);
  //       navigate(`/update-opportunity/${opportunity.id}`);
  //       console.log("Updated oppo  id", opportunity.id);
  //     } catch {
  //       console.log("error - updating oppo");
  //     }
  //   };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div>
      <h1>Update Opportunity Details</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="Status">Status:</label>
          <input
            type="text"
            id="Status"
            name="Status"
            value={formik.values.Status}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="NoOfApplications">No. of Applications:</label>
          <input
            type="text"
            id="NoOfApplications"
            name="NoOfApplications"
            value={formik.values.NoOfApplications}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="Skillset">Skillset:</label>
          <input
            type="text"
            id="Skillset"
            name="Skillset"
            value={formik.values.Skillset}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="Package">Package:</label>
          <input
            type="text"
            id="Package"
            name="Package"
            value={formik.values.Package}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Update Opportunity</button>
      </form>
    </div>
  );
};

export default UpdateOpportunityForm;
