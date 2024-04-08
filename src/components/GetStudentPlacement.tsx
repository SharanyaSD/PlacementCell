import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../api/apiConfig";
import storage from "../utilities/storage";
import { StudentPlacement } from "../api/auth";

const GetStudentPlacement = () => {
  const { id } = useParams();
  const [studentPlaced, setstudentPlaced] = useState<StudentPlacement[]>([]);

  const fetchCompany = async () => {
    if (id) {
      await axios({
        method: "GET",
        url: `${API_BASE_URL}/companies/${id}/student_placements`,
        headers: { Authorization: `Bearer ${storage.getToken()}` },
      })
        .then((res) => {
          setstudentPlaced(res.data);
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
      <h1 className="text-xl font-bold mb-4"> Student Placed </h1>
      {studentPlaced.map((students) => (
        <div key={students.id}>
          <p>
            <strong>User Id:</strong> {students.user_id}
          </p>
          <p>
            <strong>Designation :</strong> {students.designation}
          </p>
          <p>
            <strong>Package: </strong> {students.package}
          </p>
          <p>
            <strong>Requirement: </strong> {students.requirements}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GetStudentPlacement;
