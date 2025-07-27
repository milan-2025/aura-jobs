import { createTheme, Input, ThemeProvider, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            borderRadius: "10px 10px",
            backgroundColor: outerTheme.inputGrey,
            padding: "0.3rem",

            color: outerTheme.textBlack,
            // padding: "0.5rem",
            "&::before, &::after": {
              borderBottom: "0px",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "0px",
            },
            "&.Mui-focused:after": {
              borderBottom: "0px",
            },
          },
        },
      },
    },
  });

const MySearchField = ({ ...props }) => {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Input
        placeholder="Search Jobs"
        startAdornment={<SearchIcon sx={{ paddingRight: "0.2rem" }} />}
        fullWidth
      ></Input>
    </ThemeProvider>
  );
};

export default MySearchField;
