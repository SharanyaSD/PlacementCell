// import React, { useEffect, useState } from "react";
import { createUser } from "../api/auth";
// import API_BASE_URL from "../api/apiConfig";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useFormik } from "formik";
import "../index.css";
import { Box, Button, TextField } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { toast } from "react-toastify";

const CreateUserForm = () => {
  // const notify = () => toast("Added user");
  const createuser = async (values: {}) => {
    try {
      console.log("in try");
      const response = await createUser({ user: values });
      console.log(response.data);
      navigate(`/users/${formik.values.email}`);
      toast("Added User Succesfully");
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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "500px",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <TextField
              required
              id="role_id"
              name="role_id"
              type="number"
              label="Role Id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role_id}
            />
            <div></div>
            <TextField
            required
              id="first_name"
              name="first_name"
              type="text"
              label="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />

            <TextField
              required
              id="last_name"
              name="last_name"
              type="text"
              label="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
            <TextField
              required
              id="email"
              name="email"
              type="text"
              label="Email"
              defaultValue={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <TextField
              // required
              id="batch"
              name="batch"
              type="text"
              label="Batch"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.batch}
            />
            <TextField
              required
              id="branch"
              name="branch"
              type="text"
              label="Branch"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.branch}
            />

            <TextField
              // required
              id="linkedin"
              name="linkedin"
              type="text"
              label="LinkedIn "
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.linkedin}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="success"
                disableElevation
              >
                Create User
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default CreateUserForm;
