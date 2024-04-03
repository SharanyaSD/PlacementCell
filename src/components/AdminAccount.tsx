import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1> ADMIN PAGE</h1>
      <div className="userform">
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          onClick={navigateCreateUser}
        >
          Create new user
        </button>
      </div>
      <div className="companyForm">
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          onClick={navigateCompany}
        >
          Add new company{" "}
        </button>
      </div>
      <div>
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          onClick={navigateAllCompanies}
        >
          {" "}
          All Companies{" "}
        </button>
      </div>
    </div>
  );
};

export default AdminAccount;
