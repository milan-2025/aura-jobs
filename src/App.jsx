import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import projectColors from "../assets/util/projectColors";
import { CssBaseline } from "@mui/material";
import projectColors from "./assets/util/projectColors";

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
});

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
        {/* {/* <Homepage />  */}
      </ThemeProvider>
    </>
  );
}

export default App;
