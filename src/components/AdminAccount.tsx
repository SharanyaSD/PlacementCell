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
        <button onClick={navigateCreateUser}>Create new user</button>
      </div>
      <div className="companyForm">
        <button onClick={navigateCompany}>Add new company </button>
      </div>
      <div>
        <button onClick={navigateAllCompanies}> All Companies </button>
      </div>
    </div>
  );
};

export default AdminAccount;
