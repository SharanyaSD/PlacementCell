import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../api/auth";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import storage from "../utilities/storage";

const GetUser = () => {
  const { email } = useParams();
  const [user, setUser] = useState<User>();
  //   const navigate = useNavigate();

  const fetchUser = async () => {
    if (email) {
      await axios({
        method: "GET",
        url: `${API_BASE_URL}/users?email=${email}`,
        headers: { Authorization: `Bearer ${storage.getToken()}` },
      })
        .then((res) => {
          setUser(res.data[0]);
          console.log("response data", res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    fetchUser();
  }, [email]);

  // const navigateCreate = () => {
  //   navigate("/users");
  // };
  return (
    <div>
      <h1> Created user - </h1>
      {user && (
        <div>
          <p>
            <strong>Name :</strong> {user.first_name} {user.last_name}
          </p>
          <p>
            <strong>Email: </strong> {user.email}{" "}
          </p>
          <p>
            <strong>Batch: </strong> {user.batch}{" "}
          </p>
          <p>
            <strong>Branch: </strong> {user.branch}{" "}
          </p>
          <p>
            <strong>LinkedIn: </strong> {user.linkedin}{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default GetUser;
