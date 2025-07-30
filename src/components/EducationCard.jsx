import { Button, Grid, IconButton, Typography, useTheme } from "@mui/material";
// import { Button } from "react-native-paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EducationCard = ({ exp }) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        backgroundColor: theme.inputGrey,
        borderRadius: "25px",
        padding: "1em",
      }}
      size={12}
    >
      <Grid m={0} container>
        <Grid flexGrow={1}>
          <Typography m={0} fontWeight={450} variant="subtitle1">
            Institution
          </Typography>
        </Grid>

        <Grid>
          <IconButton
            sx={{
              padding: "0px",
              paddingRight: "0.6rem",
            }}
            color="primary"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{
              padding: "0px",
            }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
        {/* <Grid display={{ xs: "none", lg: "block" }} textAlign={"end"}>
          <Button
            sx={{ marginRight: "1rem" }}
            size="small"
            variant="contained"
            color="primary"
          >
            Edit
          </Button>

          <Button size="small" variant="contained" color="error">
            Delete
          </Button>
        </Grid> */}
      </Grid>
      <Grid container>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Typography variant="subtitle2">Degree ( Major )</Typography>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Typography
            textAlign={{ xs: "start", lg: "end" }}
            variant="subtitle2"
          >
            January 2022 - Present
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid container size={12}>
        <Grid flexGrow={1}>
          <ul
            style={{
              fontSize: "1em",
              marginLeft: "-0.5em",
              marginTop: "0.4em",
              marginBottom: "0px",
            }}
          >
            <li>point 1</li>
            <li>point 1</li>
            <li>point 1</li>
            <li>point 1</li>
            <li>point 1</li>
          </ul>
        </Grid>

        <Grid mt={2} display={{ xs: "none", lg: "block" }} textAlign={"end"}>
          <Grid mb={1}>
            <Button size="small" variant="contained" color="primary">
              Edit
            </Button>
          </Grid>
          <Grid>
            <Button size="small" variant="contained" color="error">
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default EducationCard;
