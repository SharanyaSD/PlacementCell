import React, { useEffect, useState } from "react";
import storage from "../utilities/storage";
import axios from "axios";
import API_BASE_URL from "../api/apiConfig";
import { User } from "../api/auth";
import AdminAccount from "./AdminAccount";
import UserAccount from "./UserAccount";
import ResponsiveAppBar from "./ResponsiveAppBar"; // Import the ResponsiveAppBar component
import { Avatar } from "@mui/material";

const Dashboard = () => {
  // const token = storage.getToken();
  // const object = JSON.parse(atob(token.split(".")[1]));
  const role_id = storage.getRole();

  // const [userDetails, setuserDetails] = useState<User>();

  // const fetchUser = async () => {
  //   try {
  //     const data = await axios({
  //       method: "GET",
  //       url: `${API_BASE_URL}/users/${object.user_id}`,
  //       headers: { Authorization: `Bearer ${storage.getToken()}` },
  //     });
  //     setuserDetails(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <div>
      <ResponsiveAppBar />
      {/* {userDetails && (
      
          <Avatar
            alt={userDetails.first_name}
            src="/static/images/avatar/2.jpg"
            style={{ margin: "0 auto" }}
          />
          <h1>
            <strong>Welcome, </strong> {userDetails.first_name}
          </h1>
          <p>
            <strong>Name :</strong> {userDetails.first_name}{" "}
            {userDetails.last_name}
          </p>
          <p>
            <strong>Email: </strong> {userDetails.email}
          </p> */}

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
  );
};

export default Dashboard;
