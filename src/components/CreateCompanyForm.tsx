import React from "react";
import { createCompany } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Box, Button, TextField } from "@mui/material";
const CreateCompanyForm = () => {
  const create_company = async (values: {}) => {
    try {
      console.log("in try");
      const response = await createCompany({ company: values });
      console.log(response.data.id);
      navigate(`/companies/${response.data.id}`);
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
          height: "350px",
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
                id="name"
                name="name"
                type="text"
                label="Name of Company"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <div></div>
              <TextField
                required
                id="information"
                name="information"
                type="text"
                label="information Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.information}
              />
              <div></div>

              <TextField
                required
                id="website"
                name="website"
                type="text"
                label="Webiste"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.website}
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

export default CreateCompanyForm;
