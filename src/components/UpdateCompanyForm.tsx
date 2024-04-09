import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import storage from "../utilities/storage";
import { Box } from "@mui/material";

const UpdateCompanyForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialValues = {
    name: "",
    information: "",
    website: "",
  };

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
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="name"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div>
          <label
            htmlFor="information"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Information:
          </label>
          <input
            type="text"
            id="information"
            name="information"
            value={formik.values.information}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Website:
          </label>
          <input
            type="text"
            id="website"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className="pt-10"></div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onSubmit}
        >
          Update Company
        </button>
      </form>
    </div>
  );
};

export default UpdateCompanyForm;
