import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Company } from "../api/auth";
import axios from "axios";
import API_BASE_URL from "../api/apiConfig";
import storage from "../utilities/storage";

const GetCompany = () => {
  const { name } = useParams();
  const [company, setCompany] = useState<Company>();

  useEffect(() => {
    if (name) {
      axios({
        method: "GET",
        url: `${API_BASE_URL}/company?name=${name}`,
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
  }, [name]);
  return (
    <div>
      <h1> Created user - </h1>
      {company && (
        <div>
          <p>
            <strong>Name :</strong> {company.name}
          </p>
          <p>
            <strong>Information: </strong> {company.information}
          </p>
          <p>
            <strong>Website: </strong> {company.website}
          </p>
        </div>
      )}
    </div>
  );
};

export default GetCompany;
