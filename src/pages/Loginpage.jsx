import { Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import MyTextField from "../components/MyTextField";

const Loginpage = () => {
  const theme = useTheme();
  return (
    <>
      <Grid justifyContent={"center"} container size={12}>
        <Grid container justifyContent={"center"} size={10}>
          <Grid size={12}>
            <Typography
              textAlign={"center"}
              variant="h5"
              sx={{ color: theme.textBlack }}
              fontWeight={500}
              mt={5}
            >
              Welcome to AuraJobs
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"} size={12}>
            <Grid mt={3} size={{ xs: 12, lg: 5 }}>
              {/* <TextField
              id="filled-basic"
              label="Filled"
              sx={{
                // border: "none",
                borderRadius: "25%",
              }}
              variant="filled"
            /> */}

              <MyTextField
                // size="small"
                fullWidth
                label="Email"
                variant="filled"
              />
            </Grid>
          </Grid>
          <Grid container mt={2} justifyContent={"center"} size={12}>
            <Grid size={{ xs: 12, lg: 5 }}>
              {/* <TextField
              id="filled-basic"
              label="Filled"
              sx={{
                // border: "none",
                borderRadius: "25%",
              }}
              variant="filled"
            /> */}

              <MyTextField
                // size="small"
                fullWidth
                label="Password"
                variant="filled"
                type="password"
              />
            </Grid>
            <Grid container mt={2} justifyContent={"center"} size={12}>
              <Typography variant="caption">Forget Password?</Typography>
            </Grid>
            <Grid container mt={2} justifyContent={"center"} size={12}>
              <Grid size={{ xs: 12, lg: 5 }}>
                <Button
                  sx={{ borderRadius: "25px" }}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {" "}
                  Login{" "}
                </Button>
              </Grid>
            </Grid>
            <Grid container mt={2} justifyContent={"center"} size={12}>
              <Typography variant="caption">
                Don't have an account? Sign Up
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Loginpage;
