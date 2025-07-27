import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  Input,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import MySearchField from "../components/MySearchField";
import MyTextField from "../components/MyTextField";
import { useState } from "react";
import MySelect from "../components/MySelect";
import TuneIcon from "@mui/icons-material/Tune";
import JobCard from "../components/JobCard";
// import { Button } from "react-native-paper";

const JobRecomendations = () => {
  const theme = useTheme();

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  const [personName, setPersonName] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const totalJobs = 17;

  const noOfPages = Math.ceil(totalJobs / 5);
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid justifyContent={"center"} container size={12}>
        <Grid container mt={4} size={10}>
          <Typography
            fontWeight={450}
            variant="h5"
            sx={{ color: theme.textBlack }}
          >
            Job Recommendations
          </Typography>
          <Grid mt={1} container size={12}>
            <Typography
              sx={{
                color: theme.captionColor,
              }}
              variant="caption"
            >
              Based on your profile and preferences
            </Typography>
          </Grid>
          <Grid mt={1} container size={12}>
            <MySearchField />
          </Grid>
          <Grid mt={2} container size={12}>
            <Grid
              size={12}
              sx={{
                maxWidth: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  overflowX: "auto",
                  overflowY: "hidden",
                  height: "auto",
                  whiteSpace: "noWrap",
                  paddingBottom: "1em",
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: theme.inputGrey,
                    borderRadius: "10px 10px",
                    padding: "0.4rem",
                  }}
                >
                  <TuneIcon />
                </IconButton>
                <MySelect
                  options={names}
                  title={"Location"}
                  value={personName}
                  handleChange={handleChange}
                />
                <MySelect
                  options={names}
                  title={"Job Type"}
                  value={personName}
                  handleChange={handleChange}
                />
                <MySelect
                  options={names}
                  title={"Salary Range"}
                  value={personName}
                  handleChange={handleChange}
                />
                <MySelect
                  options={names}
                  title={"Experience Level"}
                  value={personName}
                  handleChange={handleChange}
                />
                <MySelect
                  options={names}
                  title={"Industry"}
                  value={personName}
                  handleChange={handleChange}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid id="jobsContainer" mt={2} container size={12}>
            {[1, 2, 3, 4, 5].map((item) => {
              return <JobCard page={page} />;
            })}
          </Grid>
          <Grid container mb={4} mt={3} justifyContent={"center"} size={12}>
            <Pagination
              count={noOfPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default JobRecomendations;
