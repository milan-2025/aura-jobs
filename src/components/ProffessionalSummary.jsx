import { Button, Grid, Typography, useTheme } from "@mui/material";
import MyTextField from "./MyTextField";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useInput } from "../hooks/useInput";
import { isNotEmpty } from "../assets/util/formValidations";
import { useEffect } from "react";

const ProffessionalSummary = ({ setCurrentStep,currentStep }) => {
  const theme = useTheme();
  //   setNextErrors(true);

  const {enteredValue:summary, setEnteredValue: setSummary, handleOnValueBlur:handleSummaryOnBlur, handleOnValueChange: handleSummaryOnChange, hasError:hasSummaryError} = useInput('',(value)=>{
    return isNotEmpty(value)
  })

  const handleBack = ()=>{
    setCurrentStep('personalInfo')
  }
  const displayErrors = ()=>{
    handleSummaryOnBlur();
  }
  const handleSaveClicked = ()=>{
    let error = !hasSummaryError.chk
    if(error){
      displayErrors();
    }
    else{
      localStorage.setItem(currentStep,JSON.stringify({
        summary
      }))
      setCurrentStep('workExp')
    }
  }

  useEffect(()=>{
    if(localStorage.getItem(currentStep)){
      let data = JSON.parse(localStorage.getItem(currentStep))
      setSummary(data.summary);
    }
  },[])

  return (
    <>
    
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
            value={summary}
            onChange={handleSummaryOnChange}
            onBlur={handleSummaryOnBlur}
            hasError={hasSummaryError}
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
    <Grid container mb={4} size={12}>
              {/* <Grid > */}
              <Grid textAlign={"start"} size={6}>
            
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
              
              </Grid>
              <Grid textAlign={"end"} size={6}>
              
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "25px",
                    }}
                    color="primary"
                    onClick={handleSaveClicked}
                    size="small"
                  >
                    Save & Continue
                  </Button>
              
              </Grid>
              {/* </Grid> */}
            </Grid>
    </>
  );
};

export default ProffessionalSummary;
