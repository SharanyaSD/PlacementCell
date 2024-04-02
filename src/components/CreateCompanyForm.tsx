import React from "react";
import { createCompany } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const CreateCompanyForm = () => {
  const create_company = async (values: {}) => {
    try {
      console.log("in try");
      const response = await createCompany({ company: values });
      console.log(response.data);
    } catch (error) {
      console.log("in catch");
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      information: "",
      website: "",
    },
    onSubmit: (values) => {
      // console.log(values.password);
      create_company(values);
      navigate(`/companies/${values.name}`);
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
            htmlFor="name"
          >
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="information"
          >
            Information:
          </label>
          <input
            id="information"
            name="information"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.information}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="website"
          >
            Website:
          </label>
          <input
            id="website"
            name="website"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.website}
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

export default CreateCompanyForm;
