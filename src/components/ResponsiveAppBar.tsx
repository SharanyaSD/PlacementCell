import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import storage from "../utilities/storage";
import { User } from "../api/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import API_BASE_URL from "../api/apiConfig";
import { useNavigate } from "react-router-dom";

// const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const token = storage.getToken();
  const object = JSON.parse(atob(token.split(".")[1]));
  const role_id = storage.getRole();

  const [userDetails, setuserDetails] = useState<User>();

  const navigate = useNavigate();

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

  const handleLogout = () => {
    storage.clearToken();
    navigate("/");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  let settings = [
    `${userDetails?.first_name} ${userDetails?.last_name}`,
    `${userDetails?.email}`,
  ];
  // if (role_id === 1 || role_id === 2) {
  //   settings = [
  //     `${userDetails?.first_name} ${userDetails?.last_name}`,
  //     `${userDetails?.email}`,
  //   ];
  // } else {
  //   settings = [
  //     `${userDetails?.first_name} ${userDetails?.last_name}`,
  //     `${userDetails?.email}`,
  //     `${userDetails?.batch}`,
  //     `${userDetails?.branch}`,
  //     `${userDetails?.linkedin}`,
  //   ];
  // }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PLACEMENT CELL
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PLACEMENT CELL
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <h3 className="mr-4">
              <strong>Welcome, </strong> {userDetails?.first_name}
            </h3>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Tooltip title="View">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <div>
                    <Avatar
                      alt={userDetails?.first_name}
                      src="/static/images/avatar/2.jpg"
                      // style={{ margin: "0 auto" }}
                    />
                  </div>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting: any) => (
                  <MenuItem key={setting}>
                    {/* {console.log(setting)} */}
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <svg
                className=" w-8 h-10 mx-8  text-gray-800 dark:text-white cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
                onClick={handleLogout}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
