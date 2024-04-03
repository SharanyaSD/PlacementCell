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

  const companyPlacements = () => {
    navigate(`/company_placements/${id}`);
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
    <div>
      <div className="flex justify-between">
        <div className="w-3/4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <p className="text-4xl font-semibold text-gray-900 dark:text-black">
                {company.name}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-blue-600">
                Google's parent company Alphabet Inc. is one of the five Big
                Tech companies, alongside Amazon, Apple, Meta, and Microsoft.
                U.S. Alphabet Inc. Google was founded on September 4, 1998, by
                American computer scientists Larry Page and Sergey Brin while
                they were PhD students at Stanford University in California.{" "}
                {company.information}
              </p>
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
        <div className="w-1/4 flex flex-col items-center justify-center">
          {role_id === 1 || role_id === 2 ? (
            <>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={companyPlacements}
              >
                Create Company Placement
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={UpdateCompany}
              >
                Update Company
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                Create Student Placement
              </button>
            </>
          ) : null}
          {role_id === 3 ? <></> : null}
        </div>
      </div>
      <Opportunities />
    </div>
  );
};

export default CompanyDetails;
