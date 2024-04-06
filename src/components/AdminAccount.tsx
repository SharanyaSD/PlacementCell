import React from "react";
import { useNavigate } from "react-router-dom";
import home from "../assets/images/dypcoe.jpg";
import { CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";

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

  return (
    <div style={{ position: "relative" }}>
      <div className="h-[35rem] overflow-hidden relative">
        <img
          src={home}
          alt="Description"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute top-1/2 right-[55%] transform -translate-y-1/2 bg-black bg-opacity-50 p-4 rounded text-white "
          style={{ maxWidth: "40%", padding: "2rem" }}
        >
          <h2>D Y Patil College of Engineering Akurdi, Pune </h2>
          <h4>
            APPROVED BY AICTE , RECOGNIZED BY DTE (GOVT.) & AFFILIATED TO
            SAVITRIBAI PHULE PUNE UNIVERSITY (Formerly Known as University of
            Pune)
          </h4>
          <p>
            Dr. D. Y. Patil Prathishthan's, D.Y. Patil College of Engineering,
            was established in 1984 in Pimpri and later shifted to Akurdi
            complex in 2001, which is in the vicinity of Pimpri Chinchwad
            Industrial area, one of the biggest Industrial belts in Asia. The
            college spreads over 10 acres of land with seven Engineering
            disciplines. This Institute is approved by AICTE, New Delhi and is
            affiliated to the Savitribai Phule Pune University. The college has
            excellent & ambient infrastructure with well-equipped laboratories.
            Well-qualified, motivated, and dedicated faculty members are serving
            in the Institute. Students are encouraged to actively participate in
            National and State level co-curricular and extracurricular
            activities. The institute has well planned boys and girls hostel in
            the campus with better amenities and ultra-modern facilities.
          </p>
        </div>

        {/* Buttons */}
        <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2 text-right w-[30%]">
          {/* <div className="userform mb-2">
            <button
              className="text-white bg-gray-800 flex-shrink-0 hover:bg-gray-900  border-gray-500 hover:border-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 border-4py-1 mr-2 focus:outline-none padding-top:0.800rem"
              onClick={navigateCreateUser}
              style={{ paddingTop: "0.8rem" }}
            >
              Create new user
            </button>
          </div>
          <div className="companyForm mb-2">
            <button
              className="text-white bg-gray-800 flex-shrink-0 hover:bg-gray-900  border-gray-500 hover:border-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 border-4py-1 mr-2 focus:outline-none padding-top:0.800rem"
              onClick={navigateCompany}
              style={{ paddingTop: "0.8rem" }}
            >
              Add new company
            </button>
          </div>
          <div>
            <button
              className="text-white bg-gray-800 flex-shrink-0 hover:bg-gray-900  border-gray-500 hover:border-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 border-4py-1 mr-2 focus:outline-none padding-top:0.800rem"
              onClick={navigateAllCompanies}
              style={{ paddingTop: "0.8rem" }}
            >
              All Companies
            </button>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {/* Card 1 */}
        <div className="p-4 max-w-sm mx-auto">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Create New User</h2>
              <p className="text-gray-700 text-base">
                Create a new user account.
              </p>
            </div>
            <Button
              variant="contained"
              onClick={navigateCreateUser}
              className="w-full bg-gray-800 text-white hover:bg-gray-900"
            >
              Create User
            </Button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 max-w-sm mx-auto">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Add New Company</h2>
              <p className="text-gray-700 text-base">
                Add a new company to the list.
              </p>
            </div>
            <Button
              variant="contained"
              onClick={navigateCompany}
              className="w-full bg-gray-800 text-white hover:bg-gray-900"
            >
              Add Company
            </Button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-4 max-w-sm mx-auto">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">All Companies</h2>
              <p className="text-gray-700 text-base">
                View all companies in the list.
              </p>
            </div>
            <Button
              variant="contained"
              onClick={navigateAllCompanies}
              className="w-full bg-gray-800 text-white hover:bg-gray-900"
            >
              View Companies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

///modify acrds to just text if nto bttons else add text cards on image

export default AdminAccount;
