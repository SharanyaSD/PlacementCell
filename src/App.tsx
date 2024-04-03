import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/CreateUserForm";
import GetUser from "./components/GetUser";
import CreateUserForm from "./components/CreateUserForm";
import GetCompany from "./components/GetCompany";
import CreateCompanyForm from "./components/CreateCompanyForm";
import AdminAccount from "./components/AdminAccount";
import AllCompanies from "./components/AllCompanies";
import Opportunities from "./components/Opportunities";
import CreateOpportunityForm from "./components/CreateOpportunityForm";
import CompanyDetails from "./components/CompanyDetails";
import UpdateCompanyForm from "./components/UpdateCompanyForm";
import UpdateOpportunityForm from "./components/UpdateOpportunityForm";
import CreateCompanyPlacement from "./components/CreateCompanyPlacement";
// import AllCompanies from "./components/AllCompanies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-user",
    element: <CreateUserForm />,
  },
  {
    path: "/users/:email",
    element: <GetUser />,
  },
  {
    path: "/create-company",
    element: <CreateCompanyForm />,
  },
  {
    path: "/companies/:id",
    element: <CompanyDetails />,
  },
  {
    path: "/admin-account",
    element: <AdminAccount />,
  },
  {
    path: "/companies",
    element: <AllCompanies />,
  },
  {
    path: "/opportunities/:id",
    element: <CreateOpportunityForm />,
  },
  {
    path: "/companies/:id",
    element: <CompanyDetails />,
  },
  {
    path: "/update-company/:id",
    element: <UpdateCompanyForm />,
  },
  {
    path: "/update-opportunity/:id",
    element: <UpdateOpportunityForm />,
  },
  {
    path: "/company_placements/:id",
    element: <CreateCompanyPlacement />,
  },

  // {
  //   path: "/close-opportunity/:id",
  //   element: <Opportunities />,
  // },
  // {
  //   path: "create-opportunity",
  //   element: <CreateOpportunityForm />,
  // },

  //ytm CreateUSer and UpdateUSer
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
