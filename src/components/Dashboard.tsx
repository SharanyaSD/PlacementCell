import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userDetails, setuserDetails] = useState<any>(null);
  useEffect(() => {
    const loggedUserDetails = localStorage.getItem("userDetails");
    if (loggedUserDetails) {
      const parsedUserDetails = JSON.parse(loggedUserDetails);
      setuserDetails(parsedUserDetails);
    }
  }, []);
  return (
    <div>
      <h1> User Account </h1>
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
            <strong>Created at : </strong> {userDetails.created_at}{" "}
          </p>
          <p>
            <strong>LinkedIn: </strong> {userDetails.linkedin}{" "}
          </p>

          <p>
            <strong>Updated at: </strong> {userDetails.updated_at}{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
