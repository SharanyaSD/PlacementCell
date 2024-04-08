import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Company, CompanyPlacement } from "../api/auth";
import axios from "axios";
import API_BASE_URL from "../api/apiConfig";
import storage from "../utilities/storage";

const GetCompanyPlacement = () => {
  const { id } = useParams();
  const [company, setCompany] = useState<CompanyPlacement[]>([]);

  const fetchCompany = async () => {
    if (id) {
      await axios({
        method: "GET",
        url: `${API_BASE_URL}/companies/${id}/company_placements`,
        headers: { Authorization: `Bearer ${storage.getToken()}` },
      })
        .then((res) => {
          setCompany(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    fetchCompany();
  }, [id]);
  return (
    <div>
      <h1> Company Placement Status </h1>
      {company.map((comp) => (
        <div key={comp.id}>
          <p>
            <strong>Year :</strong> {comp.year}
          </p>
          <p>
            <strong>Applied: </strong> {comp.applied}
          </p>
          <p>
            <strong>Selected: </strong> {comp.selected}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GetCompanyPlacement;
