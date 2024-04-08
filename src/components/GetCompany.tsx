import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Company } from "../api/auth";
import axios from "axios";
import API_BASE_URL from "../api/apiConfig";
import storage from "../utilities/storage";

interface Props {
  company: Company;
  onClose: () => void;
}

const GetCompany = ({ company, onClose }: Props) => {
  const { id } = useParams();
  // const [company, setCompany] = useState<Company>();

  const fetchCompany = async () => {
    if (id) {
      await axios({
        method: "GET",
        url: `${API_BASE_URL}/companies/${id}`,
        headers: { Authorization: `Bearer ${storage.getToken()}` },
      })
        .then((res) => {
          // setCompany(res.data);
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
      {/* <h6> Created companny  </h6> */}
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
