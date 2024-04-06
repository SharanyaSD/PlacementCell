import React from "react";
import { createCompany, createStudentPlacement } from "../api/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Box, Button, TextField } from "@mui/material";

const CreateStudentPlacement = () => {
  const { id } = useParams();
  const create_company = async (values: {}) => {
    if (id) {
      try {
        console.log("in try");

        const response = await createStudentPlacement(values, id);
        console.log(response.data);
      } catch (error) {
        console.log("in catch");
        console.log(error);
      }
    }
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      designation: "",
      package: 0,
      requirements: "",
      email: "",
    },
    onSubmit: (values) => {
      // console.log(values.password);
      const payload = {
        student_placement: {
          // "user_id":1,
          designation: values.designation,
          package: values.package,
          requirements: values.requirements,
        },
        email: values.email,
      };
      create_company(payload);
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
          width: "300px",
          height: "400px",
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
            <div
              style={{
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <TextField
                required
                id="designation"
                name="designation"
                type="text"
                label="Designation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.designation}
              />
              <div></div>
              <TextField
                required
                id="package"
                name="package"
                type="number"
                label="Package"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.package}
              />
              <div></div>

              <TextField
                required
                id="requirements"
                name="requirements"
                type="text"
                label="Requirements"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.requirements}
              />
              <TextField
                required
                id="email"
                name="email"
                type="text"
                label="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
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
                Add
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default CreateStudentPlacement;
