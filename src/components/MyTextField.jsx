import { createTheme, TextField, ThemeProvider, useTheme } from "@mui/material";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: "10px 10px",
            // backgroundColor: "#F0f2f5",
            paddingBottom: "0.3rem",

            color: outerTheme.textBlack,
            // padding: "0.5rem",
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            paddingLeft: "0.2rem",
            borderRadius: "10px 10px",
            // padding: "0.5rem",
            // backgroundColor: "#F0f2f5",
            "&::before, &::after": {
              borderBottom: "0px",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "0px",
            },
            "&.Mui-focused:after": {
              borderBottom: "0px",
              paddingBottom: "0.3rem",
            },
          },
        },
      },
    },
  });

const MyTextField = ({ ...props }) => {
  const outerTheme = useTheme();
  return (
    <>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField {...props} />
      </ThemeProvider>
    </>
  );
};

export default MyTextField;
