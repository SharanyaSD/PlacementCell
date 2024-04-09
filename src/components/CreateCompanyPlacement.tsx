import React from "react";
import { createCompanyPlacement } from "../api/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

import { toast } from "react-toastify";
const CreateCompanyPlacement = () => {
  const notify = () => toast("Added Company Placement");

  const { id } = useParams();
  console.log(id);

  const create_company_placement = async (values: {}) => {
    if (id) {
      try {
        console.log("in try");
        const response = await createCompanyPlacement(
          { company_placement: values },
          id
        );
        console.log(response.data);
        navigate(`/get_company_placements/${id}`);
      } catch (error) {
        console.log("in catch");
        console.log(error);
      }
    }
  };
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      year: 0,
      applied: "",
      selected: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      create_company_placement(values);
    },
  });
  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <div>
            <label
              className="text-sm text-gray-500 dark:text-gray-400"
              htmlFor="year"
            >
              Year:
            </label>
            <input
              id="year"
              name="year"
              type="year"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.year}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <div>
            <label
              className="text-sm text-gray-500 dark:text-gray-400"
              htmlFor="applied"
            >
              Applied:
            </label>
            <input
              id="applied"
              name="applied"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.applied}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <div>
            <label
              className="text-sm text-gray-500 dark:text-gray-400"
              htmlFor="selected"
            >
              Selected:
            </label>
            <input
              id="selected"
              name="selected"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.selected}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <div className="pt-5"></div>
          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => onsubmit}
            >
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCompanyPlacement;
