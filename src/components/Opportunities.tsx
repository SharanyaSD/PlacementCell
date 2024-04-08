import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Opportunity,
  handleUpdateOpportunity,
  closeOpportunity,
} from "../api/auth";
import API_BASE_URL from "../api/apiConfig";

import axios from "axios";
import storage from "../utilities/storage";

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

  const Apply = async (opportunity_id:number) => {
    if (id) {
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
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <h1>Opportunities for Company</h1>

      <div className="grid grid-cols-1 gap-4">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-white shadow-md rounded px-4 py-4 flex flex-col justify-between"
          >
            <div>
              <p>{opportunity.designation}</p>

              <p>Status: {opportunity.status}</p>
              <p>No. of Applications: {opportunity.no_of_applications}</p>
              <p>Skillset: {opportunity.skillset}</p>
              <p>Package: {opportunity.package}</p>
            </div>
            <div className="mt-4 flex justify-end">
              {role_id === 1 || role_id === 2 ? (
                <>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ml-1"
                    onClick={() => UpdateOpportunity(opportunity)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-1"
                    onClick={() => CloseOpportunity(opportunity)}
                  >
                    Close
                  </button>
                </>
              ) : null}
              {role_id === 3 ? (
                <>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ml-1"
                    onClick={() => Apply(opportunity.id)}
                    disabled={opportunity.status === "closed"}
                  >
                    Apply
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
