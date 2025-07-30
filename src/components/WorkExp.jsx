import {
  Button,
  Chip,
  FormHelperText,
  Grid,
  IconButton,
  Tooltip,

  // ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import MyTextField from "./MyTextField";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { useCallback, useEffect, useState } from "react";
import SoloExp from "./SoloExp";
import ExpCard from "./ExpCard";

const WorkExp = () => {
  const theme = useTheme();

  // const outerTheme = useTheme();

  const [experiences, setExperiences] = useState([]);

  const [showSoloExp, setShowSoloExp] = useState(true);
  // const [showExpCard, setShowExpCard] = useState(false);
  // const [addExpClicked, setAddExpClicked] = useState(false);

  useEffect(() => {
    if (experiences.length > 0) {
      setShowSoloExp(false);
    }
  }, []);

  return (
    <Grid size={12} mb={4} mt={2} container justifyContent={"center"}>
      <Typography
        textAlign={"center"}
        variant="h6"
        sx={{ color: theme.textBlack }}
      >
        Add Work Experience{" "}
      </Typography>
      {/* grab all the exp added and add them */}
      {!showSoloExp && <ExpCard />}
      {showSoloExp ? (
        <SoloExp
          setShowSoloExp={setShowSoloExp}
          setExperiences={setExperiences}
        />
      ) : (
        <Grid container justifyContent={"center"} size={12}>
          <Grid mt={2} size={{ xs: 12, lg: 5 }}>
            <Button
              onClick={() => {
                // setAddExpClicked(true);
                setShowSoloExp(true);
              }}
              variant="contained"
              sx={{
                backgroundColor: theme.captionColor,
              }}
              fullWidth
            >
              Add Another Experience
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default WorkExp;
