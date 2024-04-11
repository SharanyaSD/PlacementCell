// import React, { useEffect, useState } from "react";
import { createUser } from "../api/auth";
// import API_BASE_URL from "../api/apiConfig";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useFormik } from "formik";
import "../index.css";
// import { Box, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";

const CreateUserForm = ({ handleCancel }: { handleCancel: Function }) => {
  // const notify = () => toast("Added user");
  const createuser = async (values: {}) => {
    try {
      console.log("in try");
      const response = await createUser({ user: values });
      console.log(response.data);
      // onCancel();

      // navigate(`/users/${formik.values.email}`);
      toast("Added User Succesfully");
      handleCancel();
    } catch (error) {
      console.log("in catch");
      console.log(error);
      toast("User details not found");
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

  const handleOk = async () => {
    try {
      await formik.submitForm();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}

      <Form
        layout="vertical"
        onFinish={formik.handleSubmit}
        initialValues={formik.initialValues}
      >
        <Form.Item label="Role Id" required>
          <Input
            name="role_id"
            type="number"
            value={formik.values.role_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="First Name" required>
          <Input
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="Last Name" required>
          <Input
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="Email" required>
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="Password" required>
          <Input.Password
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="Batch">
          <Input
            name="batch"
            value={formik.values.batch}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="Branch" required>
          <Input
            name="branch"
            value={formik.values.branch}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item label="LinkedIn">
          <Input
            name="linkedin"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Button
          htmlType="submit"
          className="h-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateUserForm;
