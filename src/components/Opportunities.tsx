import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createOpportunity,
  Opportunity,
  handleUpdateOpportunity,
  handleDeleteOpportunity,
} from "../api/auth";
import API_BASE_URL from "../api/apiConfig";

import CreateOpportunityForm from "./CreateOpportunityForm";
import axios from "axios";
import storage from "../utilities/storage";

interface OpportunityId extends Opportunity {
  id: number;
}

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState<OpportunityId[]>([]);
  const { id } = useParams();
  console.log("in ", id);
  const fetchOpportunity = async () => {
    try {
      const response = await axios({
        url: `${API_BASE_URL}/companies/${id}/opportunities`,
        method: "GET",
        headers: { Authorization: `Bearer ${storage.getToken()}` },
      });
      setOpportunities(response.data);
      // console.log(response);
    } catch (error) {
      console.error("Error fetch opportunities", error);
    }
  };
  useEffect(() => {
    fetchOpportunity();
  }, [id]);

  const UpdateOpportunity = async (opportunity:{},id:number) => {
    try {
      await handleUpdateOpportunity({"opportunity":opportunity},id);

      console.log("Updated oppo  id", id);
    } catch {
      console.log("error - updating oppo");
    } finally {
      fetchOpportunity();
    }
  };

  // const deleteOpportunity = async (id: number) => {
  //   try {
  //     await handleDeleteOpportunity(id);
  //     console.log("deleted oppo  id", id);
  //   } catch {
  //     console.log("error - deleting oppo");
  //   } finally {
  //     fetchOpportunity();
  //   }
  // };

  const CloseOpportunity = async (id: number) => {
    // try {
    //     await closeOpportunity(id);
    //     fetchOpportunity(id)
    // } catch {
    //     console.error("Error closing oppo ", error);
    // }
  };

  // const handleCreateOpportunity = async (newOpportunity: Opportunity) => {
  //   try {
  //     await createOpportunity(newOpportunity);
  //     //   fetchOpportunities();
  //   } catch (error) {
  //     console.error("Error creating opportunity:", error);
  //   }
  // };

  return (
    <div>
      <h1>Opportunities for Company ID: {id}</h1>

      <ul>
        {opportunities.map((opportunity) => (
          <li key={opportunity.id}>
            <p>{opportunity.designation}</p>
            <p>Status: {opportunity.status}</p>
            <p>Skillset: {opportunity.skillset}</p>
            <p>Package: {opportunity.package}</p>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => UpdateOpportunity(opportunity.id)}
            >
              Update
            </button>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => deleteOpportunity(opportunity.id)}
            >
              Delete
            </button> */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => CloseOpportunity(opportunity.id)}
            >
              Close
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Opportunities;
