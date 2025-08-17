import { createTheme, FormHelperText, TextField, ThemeProvider, useTheme } from "@mui/material";
import React, { forwardRef } from "react";

const MyTextField = forwardRef(({myPadding, hasError, ...props},ref) => {
  // let { myPadding, hasError } = props;

  // props.myPadding && delete props.myPadding
  // props.hasError && delete props.hasError
  
  const customTheme = (outerTheme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              padding: myPadding ? "0.5rem" : "",
              borderRadius: "10px 10px",
              backgroundColor: "#F0f2f5",
              paddingBottom: !myPadding ? "" : "0.5rem",

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
              backgroundColor: "#F0f2f5",
              "&::before, &::after": {
                borderBottom: "0px",
                // paddingBottom: myPadding ? "0.5rem" : "0.3rem",
                borderRadius: "10px 10px",
                height: "100%",
                // backgroundColor: "#F0f2f5",
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: "0px",
                // backgroundColor: "#F0f2f5",
              },
              "&.Mui-focused:after": {
                borderBottom: "0px",
                paddingBottom: myPadding ? "0.5rem" : "0.3rem",
                // backgroundColor: "#F0f2f5",
              },
              "&:hover , &:hover::after, &:hover::before": {
                // backgroundColor: "#F0f2f5",
              },
              "&:focused, &focused::after, &focused::before": {
                // backgroundColor: "#F0f2f5",
              },
            },
          },
        },
      },
    });
  const outerTheme = useTheme();
  return (
    <>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField inputRef={ref} {...props} />
        {hasError && !hasError.chk && <FormHelperText sx={{
          marginLeft: '0.5rem',
          marginTop: '0.3rem'
        }} error={true}>{hasError.message}</FormHelperText>}
      </ThemeProvider>
    </>
  );
});

export default MyTextField;
