import { useFormik } from "formik";
import React from "react";
import { createOpportunity } from "../api/auth";
import { useNavigate, useParams } from "react-router-dom";

// interface CreateOpportunityFormProps {
//   companyId: number;
//   onCreate: (newOpportunity: Opportunity) => void;
// }

const CreateOpportunityForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("in ", id);
  const create_opportunity = async (values: any) => {
    // console.log("in create", values);
    try {
      console.log("try");
      const response = await createOpportunity(values);
      console.log(response.data);
      navigate(`/companies/${id}`);
    } catch (error) {
      console.error("Error creating opportunity:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      company_id: id,
      status: "",
      no_of_applications: 0,
      designation: "",
      skillset: "",
      package: 0,
      start_date: "",
      end_date: "",
    },
    onSubmit: (values) => {
      // console.log(values.company_id);
      create_opportunity(values);
      // navigate(`/opportunities/${props.companyId}`);
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.status) {
        errors.status = "Required";
      }
      if (!values.designation) {
        errors.designation = "Required";
      }
      if (!values.skillset) {
        errors.skillset = "Required";
      }
      if (!values.package) {
        errors.package = "Required";
      }
      if (!values.start_date) {
        errors.start_date = "Required";
      }
      if (!values.end_date) {
        errors.end_date = "Required";
      }
      return errors;
    },
  });

  return (
    <div>
      <h2>Create New Opportunity</h2>
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
            name="status"
            id="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          {formik.touched.status && formik.errors.status ? (
            <div>{formik.errors.status}</div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="no_of_applications"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            No. of Applications:
          </label>
          <input
            type="number"
            name="no_of_applications"
            id="no_of_applications"
            value={formik.values.no_of_applications}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          {formik.touched.no_of_applications &&
          formik.errors.no_of_applications ? (
            <div>{formik.errors.no_of_applications}</div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="designation"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Designation:
          </label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={formik.values.designation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          {formik.touched.designation && formik.errors.designation ? (
            <div>{formik.errors.designation}</div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="skillset"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Skillset:
          </label>
          <input
            type="text"
            name="skillset"
            id="skillset"
            value={formik.values.skillset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          {formik.touched.skillset && formik.errors.skillset ? (
            <div>{formik.errors.skillset}</div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="package"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Package:
          </label>
          <input
            type="text"
            name="package"
            id="package"
            value={formik.values.package}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          {formik.touched.package && formik.errors.package ? (
            <div>{formik.errors.package}</div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="start_date"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Start Date:
          </label>
          <input
            type="date"
            name="start_date"
            id="start_date"
            value={formik.values.start_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          {formik.touched.start_date && formik.errors.start_date ? (
            <div>{formik.errors.start_date}</div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="end_date"
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            End Date:
          </label>
          <input
            type="date"
            name="end_date"
            id="end_date"
            value={formik.values.end_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          {formik.touched.end_date && formik.errors.end_date ? (
            <div>{formik.errors.end_date}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Opportunity
        </button>
      </form>
    </div>
  );
};

export default CreateOpportunityForm;
