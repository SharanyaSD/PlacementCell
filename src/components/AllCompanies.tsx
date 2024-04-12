import React, { useEffect, useMemo, useState } from "react";
import { Company } from "../api/auth";
import API_BASE_URL from "../api/apiConfig";
import axios from "axios";
import storage from "../utilities/storage";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Pagination, Stack } from "@mui/material";
import { Modal } from "antd";
import CreateOpportunityForm from "./CreateOpportunityForm";

const AllCompanies = () => {
  const navigate = useNavigate();
  const role_id = storage.getRole();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchKey, setSearchKey] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 15;
  const [open, setOpen] = useState(false);
  const [companyId, setCompanyId] = useState<Number>(0);
  useEffect(() => {
    fetchCompanies();
  }, [page]);
  const fetchCompanies = () => {
    console.log("in companies", storage.getToken());

    axios({
      method: "GET",
      url: `${API_BASE_URL}/companies`,
      headers: { Authorization: `Bearer ${storage.getToken()}` },
      params: {
        _page: page,
        _limit: pageSize,
        q: searchKey,
      },
    })
      .then((res) => {
        setCompanies(res.data);
        console.log("Company data ", res.data);
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
  };
  console.log("in companies");

  const showModal = () => {
    setOpen(true);
  };

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

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const visibleCompanies: Company[] = useMemo(() => {
    return companies.filter((item) =>
      item.name.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [companies, searchKey]);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Company Name",
      width: 570,
      headerClassName: "font-bold text-xl",
      renderCell: (params) => (
        <div className="text-xl pt-2 pb-10">{params.value}</div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 600,
      headerClassName: "font-bold text-xl px-10",
      renderCell: (params) => (
        // <div
        //   style={{ display: "flex", justifyContent: "flex-end", gap: "50px" }}
        // >
        <div className="flex items-center justify-end gap-4 ">
          {role_id === 1 || role_id === 2 ? (
            <div style={{ marginLeft: "auto" }}>
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                // onClick={() => navigateOpportunities(params.row.id)}
              >
                <span
                  className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-50  text-gray-900  dark:bg-white-900 rounded-md group-hover:bg-opacity-0"
                  onClick={() => {
                    setCompanyId(params.row.id);
                    showModal();
                  }}
                >
                  Create Opportunity
                </span>
              </button>
              {/* <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-2 "
                  onClick={() => navigateOpportunities(params.row.id)}
                >
                  Create Opportunity
                </button> */}
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                onClick={() => navigateCompanyPlacements(params.row.id)}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-50  text-gray-900  dark:bg-white-900 rounded-md group-hover:bg-opacity-0">
                  Company Placements
                </span>
              </button>
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                onClick={() => navigateStudentPlacements(params.row.id)}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-50  text-gray-900  dark:bg-white-900 rounded-md group-hover:bg-opacity-0">
                  Student Placements
                </span>
              </button>
            </div>
          ) : null}
          {role_id === 3 ? (
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              onClick={() => navigateStudentPlacements(params.row.id)}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-50  text-gray-900  dark:bg-white-900 rounded-md group-hover:bg-opacity-0">
                Student Placements
              </span>
            </button>
          ) : null}
        </div>
      ),
    },
  ];

  return (
    // <div
    //   style={{ height: 800, width: "100%", margin: "auto", marginTop: "20px" }}
    // >
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">COMPANIES</h1>
      <div className="flex flex-col items-center mb-4">
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-white-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        {/* <label
            htmlFor="default-search"
            className="mr-4 text-sm font-medium text-white-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative flex items-center">
            <input
              type="search"
              id="default-search"
              className="block w-80 p-2 text-sm text-black-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div> */}
      </div>{" "}
      {/* <input
          type="text"
          placeholder="Search by company name"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
          className="block w-full px-4 py-2 border border-gray-300 rounded mb-4"
        /> */}
      <DataGrid
        rows={visibleCompanies}
        columns={columns}
        pagination
        // page={page}
        // onPageChange={handlePageChange}
        rowCount={visibleCompanies.length}
        // pageSize={pageSize}
        pageSizeOptions={[pageSize]}
        // checkboxSelection
        className="data-grid"
        rowHeight={96}
        onRowDoubleClick={(params) => navigateCompanyDetails(params.row.id)}
      />
      <Modal open={open} onCancel={handleCancel} footer={null}>
        <CreateOpportunityForm handleCancel={handleCancel} id={companyId} />
      </Modal>
      {/* <Stack spacing={2}>
          <Pagination count={10} color="primary" />
        </Stack> */}
    </div>
  );
};

export default AllCompanies;
