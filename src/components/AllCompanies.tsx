import React, { useEffect, useState } from "react";
import { Company } from "../api/auth";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import storage from "../utilities/storage";
import { useNavigate } from "react-router-dom";

//check once

const AllCompanies = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState<Company[]>([]);
  console.log("in companies", storage.getToken());
  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_BASE_URL}/companies`,
      headers: { Authorization: `Bearer ${storage.getToken()}` },
    })
      .then((res) => {
        setCompanies(res.data);
        console.log("company data ", res.data);
      })
      .catch((err) => {
        console.log("err fetching comapnies", err.response);
        if (err.response) {
          console.log("Data from server:", err.response.data);
          console.log("Status code:", err.response.status);
          console.log("Headers:", err.response.headers);
        } else if (err.request) {
          console.log("Request made but no response received:", err.request);
        } else {
          console.log("Error setting up the request:", err.message);
        }
      });
  }, []);
  console.log("in companies");

  const navigateCompanyDetails = (companyId: number) => {
    navigate(`/companies/${companyId}`);
  };

  const navigateOpportunities = (companyId: number) => {
    navigate(`/opportunities/${companyId}`);
  };

  return (
    <>
      <div>
        <h1> Company List</h1>
        <div>
          {companies.map((company) => {
            return (
              <ul key={company.id}>
                <li onClick={() => navigateCompanyDetails(company.id || 0)}>
                  {company.name}
                </li>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => navigateOpportunities(company.id || 0)}
                >
                  Create Opportunity
                </button>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllCompanies;
