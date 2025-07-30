import { Button, Grid, Typography, useTheme } from "@mui/material";
import MyTextField from "./MyTextField";
import { useEffect, useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers";
import SoloEducation from "./SoloEducation";
import EducationCard from "./EducationCard";

const Education = () => {
  const theme = useTheme();

  const [educations, setEducations] = useState([]);
  //   const [addEduClicked, setAddEduClicked] = useState(false);

  //   const [showEducationCard, setShowEducationCard] = useState(false);
  const [showSoloEdu, setShowSoloEdu] = useState(true);
  // const [addExpClicked, setAddExpClicked] = useState(false);

  useEffect(() => {
    if (educations.length > 0) {
      setShowSoloEdu(false);
    }
  }, []);

  return (
    <Grid size={12} mb={4} mt={2} container justifyContent={"center"}>
      <Typography
        textAlign={"center"}
        variant="h6"
        sx={{ color: theme.textBlack }}
      >
        Add Education
      </Typography>
      {/* <EducationCard educations={educations} /> */}

      {!showSoloEdu && <EducationCard />}
      {showSoloEdu ? (
        <SoloEducation
          setShowSoloEdu={setShowSoloEdu}
          setEducations={setEducations}
        />
      ) : (
        <Grid container justifyContent={"center"} size={12}>
          <Grid mt={2} size={{ xs: 12, lg: 5 }}>
            <Button
              onClick={() => {
                // setAddEduClicked(true);
                setShowSoloEdu(true);
              }}
              variant="contained"
              sx={{
                backgroundColor: theme.captionColor,
              }}
              fullWidth
            >
              Add Another Education
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Education;
