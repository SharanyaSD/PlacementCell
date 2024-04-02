import { useFormik } from "formik";
import React from "react";
import { createOpportunity, Opportunity } from "../api/auth";
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
    console.log("in create", values);
    try {
      const response = await createOpportunity({ values });
      console.log(response.data);
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
      create_opportunity(values);
      // navigate(`/opportunities/${props.companyId}`);
      navigate(`/opportunities/${values.company_id}`);
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
      <h2>Create New Opportunity - </h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.status && formik.errors.status ? (
            <div>{formik.errors.status}</div>
          ) : null}
        </div>

        <div>
          <label>No. of Applications:</label>
          <input
            type="number"
            name="no_of_applications"
            value={formik.values.no_of_applications}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.no_of_applications &&
          formik.errors.no_of_applications ? (
            <div>{formik.errors.no_of_applications}</div>
          ) : null}
        </div>

        <div>
          <label>Designation:</label>
          <input
            type="text"
            name="designation"
            value={formik.values.designation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.designation && formik.errors.designation ? (
            <div>{formik.errors.designation}</div>
          ) : null}
        </div>

        <div>
          <label>Skillset:</label>
          <input
            type="text"
            name="skillset"
            value={formik.values.skillset}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.skillset && formik.errors.skillset ? (
            <div>{formik.errors.skillset}</div>
          ) : null}
        </div>

        <div>
          <label>Package:</label>
          <input
            type="text"
            name="package"
            value={formik.values.package}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.package && formik.errors.package ? (
            <div>{formik.errors.package}</div>
          ) : null}
        </div>

        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="start_date"
            value={formik.values.start_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.start_date && formik.errors.start_date ? (
            <div>{formik.errors.start_date}</div>
          ) : null}
        </div>

        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="end_date"
            value={formik.values.end_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.end_date && formik.errors.end_date ? (
            <div>{formik.errors.end_date}</div>
          ) : null}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Create Opportunity
        </button>
      </form>
    </div>
  );
};

export default CreateOpportunityForm;
