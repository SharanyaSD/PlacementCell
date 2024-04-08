import React, { useEffect, useMemo, useState } from "react";
import { Company } from "../api/auth";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import storage from "../utilities/storage";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const AllCompanies = () => {
  const navigate = useNavigate();
  const role_id = storage.getRole();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchKey, setSearchKey] = useState("");

  console.log("in companies", storage.getToken());
  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_BASE_URL}/companies`,
      headers: { Authorization: `Bearer ${storage.getToken()}` },
    })
      .then((res) => {
        setCompanies(res.data);
        console.log("company data ", res.data);
      })
      .catch((err) => {
        console.log("err fetching comapnies", err.response);
        if (err.response) {
          console.log("Data from server:", err.response.data);
          console.log("Status code:", err.response.status);
          console.log("Headers:", err.response.headers);
        } else if (err.request) {
          console.log("Request made but no response received:", err.request);
        } else {
          console.log("Error setting up the request:", err.message);
        }
      });
  }, []);
  console.log("in companies");

  const navigateCompanyDetails = (companyId: number) => {
    navigate(`/companies/${companyId}`);
  };

  const navigateOpportunities = (companyId: number) => {
    navigate(`/opportunities/${companyId}`);
  };

  const navigateStudentPlacements = (companyId: number) => {
    navigate(`/get_student_placements/${companyId}`);
  };

  const navigateCompanyPlacements = (companyId: number) => {
    navigate(`/get_company_placements/${companyId}`);
  };

  const visibleCompanies: Company[] = useMemo(() => {
    return companies.filter((item) =>
      item.name.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [companies, searchKey]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Company Name", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 500,
      renderCell: (params) => (
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
        >
          {role_id === 1 || role_id === 2 ? (
            <div style={{ marginLeft: "auto" }}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1"
                onClick={() => navigateOpportunities(params.row.id)}
              >
                Create Opportunity
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => navigateCompanyPlacements(params.row.id)}
              >
                Company Placements
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1"
                onClick={() => navigateStudentPlacements(params.row.id)}
              >
                Student Placements
              </button>
            </div>
          ) : null}
          {role_id === 3 ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-1"
              onClick={() => navigateStudentPlacements(params.row.id)}
            >
              Student Placements
            </button>
          ) : null}
        </div>
      ),
    },
  ];

  return (
    <div
      style={{ height: 800, width: "100%", margin: "auto", marginTop: "20px" }}
    >
      <h1>Company List</h1>
      <input
        type="text"
        placeholder="Search by company name"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <DataGrid
        rows={visibleCompanies}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        onRowDoubleClick={(params) => navigateCompanyDetails(params.row.id)}
      />
    </div>
  );
};

export default AllCompanies;
