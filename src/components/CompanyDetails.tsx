import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import storage from "../utilities/storage";
import { handleUpdateCompany } from "../api/auth";
import Opportunities from "./Opportunities";

const CompanyDetails = () => {
  const role_id = storage.getRole();
  console.log("Company details ", role_id);

  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_BASE_URL}/companies/${id}`,
      headers: { Authorization: `Bearer ${storage.getToken()}` },
    })
      .then((res) => {
        setCompany(res.data);
      })
      .catch((err) => {
        console.log("Error - fetching  company details", err);
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
  }, [id]);

  const companyPlacements = (id: number) => {
    navigate(`/create_company_placements/${id}`);
  };

  const studentPlacements = (id: number) => {
    navigate(`/create_student_placements/${id}`);
  };

  const UpdateCompany = async () => {
    try {
      await handleUpdateCompany(company, company.id);
      navigate(`/update-company/${id}`);
      console.log("Updated company  id", id);
    } catch (error) {
      console.log("error - updating company", error);
    }
  };

  if (!company) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-30">
      <div className="flex flex-col items-center justify-center  bg-gray-50 ">
        {" "}
        <div className="w-3/4 max-w-4xl">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <p className="text-4xl font-semibold text-gray-900 dark:text-black">
                {company.name}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-blue-600">{company.information}</p>
            </div>
            <div>
              <p>
                Visit:{" "}
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.website}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex justify-center space-x-4">
          {role_id === 1 || role_id === 2 ? (
            <div className="flex">
              <button
                className="w-full h-15 text-white me-2 mb-2  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                onClick={() => {
                  companyPlacements(company.id);
                }}
              >
                Create Company Placement
              </button>
              <button
                className=" w-full h-15 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                // className="transition ease-in-out delay-150  text-white bg-gradient-to-rfrom-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                onClick={UpdateCompany}
              >
                Update Company Details
              </button>
              <button
                className="w-full h-15 text-white me-2 mb-2  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                onClick={() => {
                  studentPlacements(company.id);
                }}
              >
                Create Student Placement
              </button>
            </div>
          ) : null}
          {role_id === 3 ? <></> : null}
        </div>
      </div>
      <div>
        <Opportunities />
      </div>
    </div>
  );
};

export default CompanyDetails;
