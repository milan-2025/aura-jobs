import {
  Button,
  Grid,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import MyTextField from "../components/MyTextField";
import PersonalInfo from "../components/PersonalInfo";
import ProffessionalSummary from "../components/ProffessionalSummary";
import WorkExp from "../components/WorkExp";
// import { Button } from "react-native-paper";

const ResumeBuilder = () => {
  const [progress, setProgress] = useState(0);
  const theme = useTheme();
  //   const stepsNames = [
  //     "personalInfo",
  //     "proffessionalSummary",
  //     "workExp",
  //     "Education",
  //     "skills",
  //     "Projects",
  //     "Achievements",
  //   ];
  const [nextErrors, setNextErrors] = useState(false);
  const steps = [
    {
      name: "personalInfo",
      component: (
        <PersonalInfo nextErrors={nextErrors} setNextErrors={setNextErrors} />
      ),
      proggress: 0,
    },
    {
      name: "proffessionalSummary",
      component: (
        <ProffessionalSummary
          nextErrors={nextErrors}
          setNextErrors={setNextErrors}
        />
      ),
      proggress: 15,
    },
    {
      name: "workExp",
      component: (
        <WorkExp nextErrors={nextErrors} setNextErrors={setNextErrors} />
      ),
      proggress: 30,
    },
  ];
  const [currentStep, setCurrentStep] = useState("personalInfo");
  const renderCurrentStep = (step) => {
    let foundStep = steps.find((item) => {
      return item.name == step;
    });

    return foundStep.component;
  };

  const handleNext = () => {
    if (!nextErrors) {
      let currentIndex = steps.findIndex((item) => {
        return item.name == currentStep;
      });
      if (currentIndex == steps.length - 1) {
        //we are on last
      } else {
        let nextStep = steps[currentIndex + 1];
        setCurrentStep(nextStep.name);
      }
    } else {
      alert("some input next  errors");
    }
  };

  const onFirst = currentStep == steps[0].name;
  const onLast = currentStep == steps[2].name;
  const handleBack = () => {
    if (!onFirst) {
      let currentIndex = steps.findIndex((item) => {
        return item.name == currentStep;
      });
      let backStep = steps[currentIndex - 1];
      setCurrentStep(backStep.name);
    }
  };

  useEffect(() => {
    const currentProggress = steps.find((item) => {
      return item.name == currentStep;
    }).proggress;
    setProgress(currentProggress);
    console.log("cp-", currentProggress);
  }, [currentStep]);
  return (
    <Grid container justifyContent={"center"} size={12}>
      <Grid container mt={5} justifyContent={"center"} size={10}>
        <Grid size={12} mb={0.8}>
          <Typography
            //   textAlign={"left"}
            //   justifySelf={"start"}
            variant="caption"
            fontWeight={500}
            sx={{ color: theme.textBlack }}
            // mb={2}
          >
            Let's build your resume to show our employers ( {progress}% complete
            )
          </Typography>
        </Grid>
        <Grid size={12}>
          <LinearProgress
            variant="determinate"
            color="primary"
            value={progress}
            sx={{
              height: 9,
              borderRadius: "5px",
            }}
          />
        </Grid>

        {renderCurrentStep(currentStep)}

        <Grid container mb={4} size={12}>
          {/* <Grid > */}
          <Grid textAlign={"start"} size={6}>
            {!onFirst && (
              <Button
                variant="contained"
                sx={{
                  borderRadius: "25px",
                }}
                color="inputGrey"
                onClick={handleBack}
                size="small"
              >
                Back
              </Button>
            )}
          </Grid>
          <Grid textAlign={"end"} size={6}>
            {!onLast && (
              <Button
                variant="contained"
                sx={{
                  borderRadius: "25px",
                }}
                color="primary"
                onClick={handleNext}
                size="small"
              >
                Save & Continue
              </Button>
            )}
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResumeBuilder;
