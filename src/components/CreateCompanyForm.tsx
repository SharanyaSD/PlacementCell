import React, { useState } from "react";
import { Company, createCompany } from "../api/auth";
import { useFormik } from "formik";
import { Box, Button, Fade, Modal, TextField, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import GetCompany from "./GetCompany";

const CreateCompanyForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const [company, setCompany] = useState<Company | null>(null);
  const notify = () => toast("Company added");
  const create_company = async (values: {}) => {
    try {
      console.log("in try");
      const response = await createCompany({ company: values });
      console.log(response.data.id);
      setCompany(response.data);
      setOpenModal(true);
    } catch (error) {
      console.log("in catch");
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCompany(null);
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
                onClick={notify}
              >
                Add
              </Button>
            </div>
          </div>
        </Box>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          closeAfterTransition
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fade in={openModal}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                minWidth: "300px",
                maxWidth: "80vw",
                minHeight: "200px",
                maxHeight: "80vh",
                overflow: "auto",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Company Added Successfully!
              </Typography>
              {company && (
                <GetCompany company={company} onClose={handleCloseModal} />
              )}
              <Button onClick={handleCloseModal}>Close</Button>
            </div>
          </Fade>
        </Modal>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={true}
          transition={() => null}
        />
      </div>
    </div>
  );
};

export default CreateCompanyForm;
