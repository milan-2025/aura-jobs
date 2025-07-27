import { Button, Grid, Typography, useTheme } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import InfoIcon from "@mui/icons-material/Info";

const JobCard = ({ page }) => {
  const theme = useTheme();
  return (
    <Grid
      id="jobContainer"
      justifyContent={"space-between"}
      container
      size={12}
      sx={{
        backgroundColor: theme.inputGrey,
        borderRadius: "25px",
        padding: "1em",
      }}
      mb={2}
    >
      <Grid flexGrow={1}>
        <Typography
          variant="subtitle1"
          fontWeight={425}
          sx={{ display: "block", color: theme.textBlack }}
        >
          Job Title {page}
        </Typography>
        <Typography fontWeight={400} variant="caption" color="success">
          33000 - 45000 Per Month
        </Typography>
        <Typography
          variant="caption"
          sx={{ display: "block", color: theme.captionColor }}
        >
          Full Time . Location
        </Typography>
        <Typography
          variant="caption"
          sx={{ display: "block", color: theme.captionColor }}
        >
          Company Name
        </Typography>
      </Grid>
      <Grid
        display={{ xs: "none", lg: "block" }}
        textAlign={"end"}
        flexGrow={1}
      >
        <Grid size={12}>
          <Button
            variant="contained"
            // color="primary"
            size="small"
            sx={{
              // color: theme.textBlack,
              backgroundColor: theme.captionColor,
              borderRadius: "25px",
              marginTop: "0.3rem",
            }}
          >
            View Details
          </Button>
        </Grid>
        <Grid size={12}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              // color: theme.textBlack,
              borderRadius: "25px",
              marginTop: "0.6rem",
            }}
            endIcon={<BookmarkIcon />}
          >
            Save Job
          </Button>
        </Grid>
      </Grid>
      <Grid
        display={{ xs: "block", lg: "none" }}
        flexGrow={1}
        textAlign={"end"}
      >
        <InfoIcon
          sx={{
            color: theme.captionColor,
          }}
        />{" "}
        <BookmarkIcon color="primary" />
      </Grid>
    </Grid>
  );
};

export default JobCard;
