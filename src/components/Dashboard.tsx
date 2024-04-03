import React, { useEffect, useState } from "react";
import storage from "../utilities/storage";
import axios from "axios";
import API_BASE_URL from "../api/apiConfig";
import { User } from "../api/auth";
import AdminAccount from "./AdminAccount";
import UserAccount from "./UserAccount";

const Dashboard = () => {
  const token = storage.getToken();
  // console.log(token);
  const object = JSON.parse(atob(token.split(".")[1]));
  // console.log('dashboard');
  // console.log(object.user_id);
  const role_id = storage.getRole();

  const [userDetails, setuserDetails] = useState<User>();

  const fetchUser = async () => {
    try {
      const data = await axios({
        method: "GET",
        url: `${API_BASE_URL}/users/${object.user_id}`,
        headers: { Authorization: `Bearer ${storage.getToken()}` },
      });
      setuserDetails(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1> Welcome, user </h1>
      {userDetails && (
        <div>
          <p>
            <strong>Name :</strong> {userDetails.first_name}{" "}
            {userDetails.last_name}
          </p>
          <p>
            <strong>Email: </strong> {userDetails.email}{" "}
          </p>
          <p>
            <strong>Batch: </strong> {userDetails.batch}{" "}
          </p>
          <p>
            <strong>Branch: </strong> {userDetails.branch}{" "}
          </p>
          <p>
            <strong>LinkedIn: </strong> {userDetails.linkedin}{" "}
          </p>

          {role_id === 1 || role_id === 2 ? (
            <>
              <AdminAccount />
            </>
          ) : null}
          {role_id === 3 ? (
            <>
              <UserAccount />
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
