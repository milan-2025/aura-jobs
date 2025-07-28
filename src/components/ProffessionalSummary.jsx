import { Grid, Typography, useTheme } from "@mui/material";
import MyTextField from "./MyTextField";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const ProffessionalSummary = ({ setNextErrors }) => {
  const theme = useTheme();
  //   setNextErrors(true);
  return (
    <Grid size={12} mt={2} container justifyContent={"center"}>
      <Typography
        textAlign={"center"}
        variant="h6"
        sx={{ color: theme.textBlack }}
      >
        Professional Summary{" "}
      </Typography>
      <Grid container mb={3} justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 7 }}>
          <MyTextField
            variant={"filled"}
            label={"Character limit: 2000"}
            fullWidth
            multiline={true}
            rows={7}
            myPadding={true}
          />
          <Grid mt={1} width={"fit-content"} sx={{ cursor: "pointer" }}>
            <Typography
              variant="caption"
              fontWeight={450}
              sx={{ color: theme.captionColor, marginLeft: "0.3rem" }}
            >
              Write with AI
            </Typography>
            <AutoAwesomeIcon
              sx={{
                verticalAlign: "middle",
                fontSize: "1em",
                color: theme.captionColor,
                marginLeft: "0.2em",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProffessionalSummary;
