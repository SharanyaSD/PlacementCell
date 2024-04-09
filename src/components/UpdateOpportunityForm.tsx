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
import { Box } from "@mui/material";

const UpdateOpportunityForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialValues = {
    status: "",
    no_of_applications: 0,
    skillset: "",
    package: "",
    start_date: "",
    end_date: "",
  };

  const updateOppo = async (values: any) => {
    if (id) {
      await axios({
        method: "PUT",
        url: `${API_BASE_URL}/opportunities/${id}`,
        data: { opportunity: values },
        headers: { Authorization: `Bearer ${storage.getToken()}` },
      })
        .then((res) => {
          console.log("Opportunity updated successfully:", res.data);
          navigate(-1); // Navigate back one step
        })
        .catch((error) => {
          console.error("Error - updating company:", error);
        });
    }
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
    console.log("values in update", values);
    updateOppo(values);
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
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="status"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Status:
          </label>
          <input
            type="text"
            id="status"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div>
          <label
            htmlFor="no_of_applications"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            No. of Applications:
          </label>
          <input
            type="number"
            id="no_of_applications"
            name="no_of_applications"
            value={formik.values.no_of_applications}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div>
          <label
            htmlFor="skillset"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Skillset:
          </label>
          <input
            type="text"
            id="skillset"
            name="skillset"
            value={formik.values.skillset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>

        <div>
          <label
            htmlFor="package"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Package:
          </label>
          <input
            type="text"
            id="package"
            name="package"
            value={formik.values.package}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className="pt-2"></div>
        <div>
          <label
            htmlFor="start_date"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            start_date:
          </label>
          <input
            type="date"
            id="start_date"
            name="start_date"
            value={formik.values.start_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className="pt-2"></div>
        <div>
          <label
            htmlFor="end_date"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            end_date:
          </label>
          <input
            type="date"
            id="end_date"
            name="end_date"
            value={formik.values.end_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className="pt-10">
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Opportunity
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateOpportunityForm;
