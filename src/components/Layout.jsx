import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import { ThemeProvider } from "@emotion/react";

const Layout = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <Navbar />
      <Outlet />
      {/* </ThemeProvider> */}
    </>
  );
};

export default Layout;
