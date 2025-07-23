import { Button, Grid, Typography, useTheme } from "@mui/material";
import MyTextField from "../components/MyTextField";
import CountrySelect from "../components/CountrySelect";
// import { Button } from "react-native-paper";

const Signuppage = () => {
  const theme = useTheme();
  return (
    <>
      <Grid justifyContent={"center"} mb={4} container size={12}>
        <Grid container justifyContent={"center"} size={10}>
          <Typography
            variant="h5"
            sx={{ color: theme.textBlack }}
            fontWeight={500}
            mt={5}
          >
            Create your account
          </Typography>
          <Grid container justifyContent={"center"} size={12}>
            <Grid mt={2} size={{ xs: 12, lg: 5 }}>
              <MyTextField variant={"filled"} label={"Full Name"} fullWidth />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} size={12}>
            <Grid mt={2} size={{ xs: 12, lg: 5 }}>
              <MyTextField variant={"filled"} label={"Email"} fullWidth />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} size={12}>
            <Grid mt={2} size={{ xs: 12, lg: 5 }}>
              {/* <MyTextField variant={"filled"} label={"Phone Number"}  /> */}
              <CountrySelect />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} size={12}>
            <Grid mt={2} size={{ xs: 12, lg: 5 }}>
              <MyTextField
                variant={"filled"}
                label={"Phone Number"}
                fullWidth
                type={"number"}
              />
              {/* <CountrySelect /> */}
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} size={12}>
            <Grid mt={2} size={{ xs: 12, lg: 5 }}>
              <MyTextField
                variant={"filled"}
                label={"Password"}
                fullWidth
                type={"password"}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} size={12}>
            <Grid mt={2} size={{ xs: 12, lg: 5 }}>
              <MyTextField
                variant={"filled"}
                label={"Confirm Password"}
                fullWidth
                type={"password"}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} size={12}>
            <Grid mt={2} size={{ xs: 12, lg: 5 }}>
              <Typography
                // sx={{
                //   xs: {
                //     display: "block",
                //     // marginBottom: "1 em",
                //   },
                //   lg: {
                //     display: "inline",
                //   },
                // }}
                display={{
                  xs: "block",
                  lg: "inline",
                }}
                variant="body1"
                fontWeight={700}
                mb={{
                  xs: "0.7em",
                  lg: "0",
                }}
              >
                You are :
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#d3d3d3",
                  color: theme.textBlack,
                  marginLeft: "2em",
                }}
                size="small"
              >
                Looking for jobs
              </Button>
              <Button
                sx={{
                  backgroundColor: "#d3d3d3",
                  color: theme.textBlack,
                  marginLeft: "2em",
                }}
                variant="contained"
                size="small"
              >
                Post jobs
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} size={12}>
            <Grid mt={3} size={{ xs: 12, lg: 5 }}>
              <Button
                sx={{ borderRadius: "25px" }}
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
          <Grid container mt={2} justifyContent={"center"} size={12}>
            <Typography variant="caption">
              Already have an account? Login{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Signuppage;
