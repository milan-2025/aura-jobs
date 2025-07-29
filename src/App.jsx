import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import projectColors from "../assets/util/projectColors";
import { CssBaseline } from "@mui/material";
import projectColors from "./assets/util/projectColors";
import Signuppage from "./pages/Signuppage";
import JobRecomendations from "./pages/JobRecomendations";
import ResumeBuilder from "./pages/ResumeBuilder";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// import { ThemeProvider } from "@mui/material";
// import theme from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "login",
        element: <Loginpage />,
      },
      {
        path: "sign-up",
        element: <Signuppage />,
      },
      {
        path: "job-recommendations",
        element: <JobRecomendations />,
      },
      {
        path: "resume-builder",
        element: <ResumeBuilder />,
      },
    ],
  },
]);

const myTheme = createTheme({
  palette: {
    inputGrey: {
      main: projectColors.inputGrey,
      contrastText: projectColors.textBlack,
    },
  },
  inputGrey: projectColors.inputGrey,
  textBlack: projectColors.textBlack,
  captionColor: "#666B85",
});

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
        </LocalizationProvider>
        {/* {/* <Homepage />  */}
      </ThemeProvider>
    </>
  );
}

export default App;
