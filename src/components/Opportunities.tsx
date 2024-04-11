import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Opportunity, closeOpportunity } from "../api/auth";
import API_BASE_URL from "../api/apiConfig";

import axios from "axios";
import storage from "../utilities/storage";
import { toast } from "react-toastify";

interface OpportunityId extends Opportunity {
  id: number;
}

const Opportunities = () => {
  const role_id = storage.getRole();
  const user_id = storage.getUser();

  console.log("in oppo");
  console.log(role_id);
  console.log("user_id", user_id);

  const [opportunities, setOpportunities] = useState<OpportunityId[]>([]);
  const { id } = useParams();
  console.log("in ", id);
  const navigate = useNavigate();

  const [appliedooportunity, setAppliedOpportunity] = useState<number | null>(
    null
  );

  const fetchOpportunity = async () => {
    try {
      const response = await axios({
        url: `${API_BASE_URL}/companies/${id}/opportunities`,
        method: "GET",
        headers: { Authorization: `Bearer ${storage.getToken()}` },
      });
      setOpportunities(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetch opportunities", error);
    }
  };
  useEffect(() => {
    fetchOpportunity();
  }, [id]);

  const UpdateOpportunity = async (opportunity: OpportunityId) => {
    // try {
    //   await handleUpdateOpportunity(
    //     { opportunity: opportunity },
    //     opportunity.id
    //   );
    navigate(`/update-opportunity/${opportunity.id}`);
    console.log("Updated oppo  id", opportunity);
    // } catch {
    //   console.log("error - updating oppo");
    // } finally {
    //   fetchOpportunity();
    // }
  };
  //delete opportunity
  const CloseOpportunity = async (opportunity: OpportunityId) => {
    try {
      await closeOpportunity(opportunity, opportunity.id);
    } catch {
      console.error("Error closing oppo ");
    } finally {
      fetchOpportunity();
    }
  };

  const Apply = async (opportunity_id: number) => {
    if (id && !appliedooportunity) {
      try {
        await axios({
          method: "POST",
          url: `${API_BASE_URL}/user_applications`,
          headers: {
            Authorization: `Bearer ${storage.getToken()}`,
          },
          params: {
            user_id: user_id,
            opportunity_id: opportunity_id,
          },
        });
        setAppliedOpportunity(opportunity_id);
        toast.success("Applied!");
      } catch (error) {
        console.error("Error applying: ", error);
      }
    }
  };

  // const Apply = async (opportunity_id: number) => {
  //   if (id) {
  //     await axios({
  //       method: "POST",
  //       url: `${API_BASE_URL}/user_applications`,
  //       headers: {
  //         Authorization: `Bearer ${storage.getToken()}`,
  //       },
  //       params: {
  //         user_id: user_id,
  //         opportunity_id: opportunity_id,
  //       },
  //     })
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  return (
    <div>
      <h1>Opportunities for Company</h1>

      <div className="grid grid-cols-3 gap-20">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className=" bg-gray-50 shadow-md rounded px-4 py-4 flex flex-col justify-between"
          >
            <div>
              <p>Destination: {opportunity.designation}</p>

              <p>Status: {opportunity.status}</p>
              <p>No. of Applications: {opportunity.no_of_applications}</p>
              <p>Skillset: {opportunity.skillset}</p>
              <p>Package: {opportunity.package}</p>
            </div>
            <div className="mt-4 flex justify-end">
              {role_id === 1 || role_id === 2 ? (
                <>
                  <button
                    className="transition ease-in-out delay-150  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                    onClick={() => UpdateOpportunity(opportunity)}
                  >
                    Update
                  </button>
                  <button
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                    onClick={() => CloseOpportunity(opportunity)}
                  >
                    Close
                  </button>
                </>
              ) : null}
              {role_id === 3 ? (
                <>
                  <button
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
                    onClick={() => Apply(opportunity.id)}
                    disabled={opportunity.status === "closed"}
                  >
                    {appliedooportunity === opportunity.id
                      ? "Applied"
                      : "Apply"}
                  </button>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
