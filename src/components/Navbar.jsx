import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import projectColors from "../assets/util/projectColors";
import ProjectButton from "./ProjectButton";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MyDrawer from "./MyDrawer";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const appBarRef = React.useRef(null); // Create a ref for the AppBar
  const [appBarHeight, setAppBarHeight] = useState(0);
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const inMobile = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    // This effect runs after the component mounts and after every re-render
    // where dependencies change. Here, we want it to run once initially.
    if (appBarRef.current) {
      // Access the DOM element's height
      setAppBarHeight(appBarRef.current.offsetHeight);
    }

    // Optional: Recalculate height on window resize
    const handleResize = () => {
      if (appBarRef.current) {
        setAppBarHeight(appBarRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Sign Up",
      path: "/sign-up",
    },
  ];

  const isActiveStyles = {
    color: "blue",
  };

  const navigate = useNavigate();

  const location = useLocation();
  console.log("location:- ", location);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            backgroundColor: "white",
            color: projectColors.textBlack,
          }}
          position="fixed"
          ref={appBarRef}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              AuraJobs
            </Typography>
            {/* <Button
            variant="contained"
            sx={{
              backgroundColor: projectColors.inputGrey,
              color: projectColors.textBlack,
              borderRadius: "25px",
            }}
          >
            Login
          </Button> */}
            {!inMobile ? (
              <>
                {/* <ProjectButton>Home</ProjectButton>
                <ProjectButton>About</ProjectButton>
                <ProjectButton>Contact</ProjectButton>
                <ProjectButton>Login</ProjectButton>
                <ProjectButton>Sign Up</ProjectButton> */}
                {links.map((link) => {
                  return (
                    <ProjectButton
                      key={link.name}
                      onClick={() => {
                        navigate(link.path);
                      }}
                      color={
                        location.pathname == link.path ? "primary" : "inputGrey"
                      }
                      variant="contained"
                      isActive={location.pathname == link.path}
                    >
                      {link.name}
                    </ProjectButton>
                  );
                })}
              </>
            ) : (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  setOpenDrawer(true);
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ height: appBarHeight }} />
      <MyDrawer
        links={links}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </>
  );
};

export default Navbar;
