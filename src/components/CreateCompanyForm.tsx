import React, { useState } from "react";
import { Company, createCompany } from "../api/auth";
import { useFormik } from "formik";
import { Form, Input, Button, Modal } from "antd";
import { toast, ToastContainer } from "react-toastify";
import GetCompany from "./GetCompany";

const CreateCompanyForm = ({ handleCancel }: { handleCancel: Function }) => {
  const create_company = async (values: {}) => {
    try {
      const response = await createCompany({ company: values });
      console.log(response.data);
      toast("Added Company Succesfully");
      handleCancel();
      // Open modal on success
    } catch (error) {
      console.error(error);
      toast("Not added company ");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      information: "",
      website: "",
    },
    onSubmit: (values) => {
      create_company(values);
    },
  });

  return (
    <div>
      <Form
        layout="vertical"
        onFinish={formik.handleSubmit}
        initialValues={formik.initialValues}
      >
        <Form.Item label="Name of Company" required>
          <Input
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </Form.Item>
        <Form.Item label="Information Name" required>
          <Input
            name="information"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.information}
          />
        </Form.Item>
        <Form.Item label="Webiste" required>
          <Input
            name="website"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.website}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            className="h-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4"
          >
            Add Company
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCompanyForm;
