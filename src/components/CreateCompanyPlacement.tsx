import React from "react";
import { createCompanyPlacement } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const CreateCompanyPlacement = () => {
  const create_company_placement = async (values: {}) => {
    try {
      console.log("in try");
      const response = await createCompanyPlacement({ company: values });
      console.log(response.data);
    } catch (error) {
      console.log("in catch");
      console.log(error);
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
      // navigate(`/companies/${id}`);
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            ADD
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateCompanyPlacement;
