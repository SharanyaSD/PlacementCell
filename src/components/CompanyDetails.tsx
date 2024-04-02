import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import storage from "../utilities/storage";
import { handleUpdateCompany } from "../api/auth";
import Opportunities from "./Opportunities";
const CompanyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<any>(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_BASE_URL}/companies/${id}`,
      headers: { 'Authorization': `Bearer ${storage.getToken()}` },
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

  const handleUpdateCompany = async (id: number) => {
    try {
      await handleUpdateCompany(id);

      console.log("Updated company  id", id);
    } catch {
      console.log("error - updating company");
    }
  };

  if (!company) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Company Details</h1>
      <p>Name: {company.name}</p>
      <p>Information: {company.information}</p>
      <p>Website: {company.website}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleUpdateCompany(company.id)}
      >
        {" "}
        update{" "}
      </button>
      <Opportunities />
    </div>
  );
};

export default CompanyDetails;
