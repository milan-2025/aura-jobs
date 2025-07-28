import { Grid, Typography, useTheme } from "@mui/material";
import MyTextField from "./MyTextField";

const PersonalInfo = () => {
  const theme = useTheme();
  return (
    <>
      <Grid mt={2} justifyContent={"center"} size={12}>
        <Typography
          textAlign={"center"}
          variant="h6"
          sx={{ color: theme.textBlack }}
        >
          Personal Information
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField variant={"filled"} label={"Full Name"} fullWidth />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField variant={"filled"} label={"Phone Number"} fullWidth />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField variant={"filled"} label={"Location"} fullWidth />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField variant={"filled"} label={"Email"} fullWidth />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField
            variant={"filled"}
            label={"LinkedIn Profile URL"}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container mb={3} justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField
            variant={"filled"}
            label={"Portfolio/Website URL"}
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalInfo;
