import React, { useEffect, useState } from "react";
import { Company } from "../api/auth";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import storage from "../utilities/storage";
import { useNavigate } from "react-router-dom";

//check once

const AllCompanies = () => {
  const navigate = useNavigate();
  const role_id = storage.getRole();
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

  const navigateStudentPlacements = (companyId: number) => {
    navigate(`/get_student_placements/${companyId}`);
  };

  const navigateCompanyPlacements = (companyId: number) => {
    navigate(`/get_company_placements/${companyId}`);
  };

  return (
    <div>
      <h1>Company List</h1>
      <div>
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex items-center justify-between mb-4"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
              <div className="p-5">
                <div onClick={() => navigateCompanyDetails(company.id || 0)}>
                  {company.name}
                </div>
                <div className="flex">
                  {role_id === 1 || role_id === 2 ? (
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1"
                        onClick={() => navigateOpportunities(company.id || 0)}
                      >
                        Create Opportunity
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1" onClick={()=>navigateStudentPlacements(company.id||0)} >
                        Student Placements
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={()=>{navigateCompanyPlacements(company.id||0)}}>
                        Company Placements
                      </button>
                    </>
                  ) : null}
                  {role_id === 3 ? (
                    <>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1">
                        Student Placements
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCompanies;
