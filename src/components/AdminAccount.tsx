import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../assets/images/dypcoe.jpg";
import Button from "@mui/material/Button";
import AllCompanies from "./AllCompanies";
import CreateUserForm from "./CreateUserForm";
import { Modal } from "antd";
import CreateCompanyForm from "./CreateCompanyForm";

const AdminAccount = () => {
  const navigate = useNavigate();

  const navigateCreateUser = () => {
    navigate("/create-user");
  };

  const navigateCompany = () => {
    navigate("/create-company");
  };

  const navigateAllCompanies = () => {
    navigate("/companies");
  };

  const [open, setOpen] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const showCompanyModal = () => {
    setOpenCompany(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
    setOpenCompany(false);
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-8 h-screen">
        <div className="col-span-2 overflow-y-auto px-8 py-8 bg-gray-50">
          <AllCompanies />
        </div>
        <div className="flex flex-col justify-center space-y-8 px-8 py-8 bg-gray-50">
          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p className="text-gray-700 ">
                  <h2>Create a new user account.</h2>
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  {/* <Button type="primary" onClick={()=>{
                    showModal();
                  }}>
                    Create User
                  </Button> */}
                  <Button
                    variant="contained"
                    onClick={() => {
                      showModal();
                    }}
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Create user
                  </Button>
                </p>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p className="text-gray-700 ">
                  <h2>Add a new company to the list.</h2>
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <Button
                    variant="contained"
                    onClick={() => {
                      showCompanyModal();
                    }}
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Add Company
                  </Button>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-8 px-10 sm:py-12 sm:px-12">
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                    />
                  </svg>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p className="text-gray-700 text-base">
                    View all companies in the list.
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <Button
                      variant="contained"
                      onClick={navigateAllCompanies}
                      className="w-full bg-gray-800 text-white hover:bg-gray-900"
                    >
                      View Companies
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <Modal
            title="Title"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
          >
            <CreateUserForm handleCancel={handleCancel} />
          </Modal>
          <Modal
            title="Title"
            open={openCompany}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={null}
          >
            <CreateCompanyForm handleCancel={handleCancel} />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AdminAccount;
