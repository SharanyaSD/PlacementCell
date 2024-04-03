// import React, { useEffect, useState } from "react";
import { createUser } from "../api/auth";
// import API_BASE_URL from "../api/apiConfig";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useFormik } from "formik";
import "../index.css";

const CreateUserForm = () => {
  const createuser = async (values: {}) => {
    try {
      console.log("in try");
      const response = await createUser({ user: values });
      console.log(response.data);
      navigate(`/users/${formik.values.email}`);
    } catch (error) {
      console.log("in catch");
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      role_id: 0,
      email: "",
      batch: "",
      branch: "",
      created_at: "",
      first_name: "",
      last_name: "",
      password: "",
      linkedin: "",
      placed: false,
    },
    onSubmit: (values) => {
      createuser(values);
    },
  });

  return (
    <form
      className="max-w-md mx-auto mt-20 px-4 py-8"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"></div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="role_id"
          >
            role_id
          </label>
          <input
            id="role_id"
            name="role_id"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role_id}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="first_name"
          >
            first_name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            defaultValue={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="batch"
          >
            batch
          </label>
          <input
            id="batch"
            name="batch"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.batch}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="branch"
          >
            branch
          </label>
          <input
            id="branch"
            name="branch"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.branch}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="LinkedIn"
          >
            LinkedIn
          </label>
          <input
            id="linkedin"
            name="linkedin"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.linkedin}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateUserForm;
