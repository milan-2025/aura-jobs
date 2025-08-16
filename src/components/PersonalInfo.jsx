import { FormHelperText, Grid, Typography, useTheme } from "@mui/material";
import MyTextField from "./MyTextField";
import { useEffect, useRef } from "react";
import { useInput } from "../hooks/useInput";
import { isInteger, isNotEmpty, isValidEmail } from "../assets/util/formValidations";

const PersonalInfo = ({setSavedClicked, saveClicked, handleNext}) => {
  const theme = useTheme();

  const inputRef = useRef(null);
  useEffect(() => {
    // Check if the Google Maps script has loaded
    if (window.google) {
        const autocomplete = new window.google.maps.places.Autocomplete(
            inputRef.current,
            { types: ['geocode'] }
        );

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.geometry) {
              console.log('Place selected:', place.formatted_address);
              console.log('Latitude:', place.geometry.location.lat());
              console.log('Longitude:', place.geometry.location.lng());
              console.log(inputRef.current.value)
              // You can save this data to your component's state
          }
      });
      }
    },[])

    const { enteredValue:name, handleOnValueBlur:handleNameOnBlur, handleOnValueChange: handleNameOnChange, hasError:hasNameError, didEdit:didNameEdit } = useInput('',(value)=>{
      return isNotEmpty(value)
    }) // will be pre populated with name on login

    const { enteredValue:phoneNumber, handleOnValueBlur:handleOnPhnBlur, handleOnValueChange:handleOnPhnChange, hasError:hasPhnError, didEdit:didPhnEdit} = useInput('',(value)=>{
      const result1 = isNotEmpty(value);
      if(result1.chk){
        return isInteger(value);
      }
      else{
        return result1;
      }

    });

    const { enteredValue:email, handleOnValueBlur:handleOnEmailBlur, handleOnValueChange:handleOnEmailChange, hasError: hasEmailError, didEdit:didEmailEdit } = useInput('',(value)=>{
      return isNotEmpty(value).chk?isValidEmail(value):isNotEmpty(value);
    })

    const { enteredValue:location, handleOnValueBlur:handleLocationOnBlur, handleOnValueChange: handleLocationOnChange, hasError:hasLocationError, didEdit: didLocationEdit } = useInput('',(value)=>{
      return isNotEmpty(value)
    })
    const linkdinRef = useRef(null);
    const portfolioRef = useRef(null);

    if(saveClicked) {
      let errors = !hasEmailError.chk || !hasLocationError.chk || !hasPhnError.chk || !hasNameError.chk
      if(errors){

        // setNextErrors(errors);
      }
      else{
        setSavedClicked(false);
        handleNext();

      }

    }


    

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
          <MyTextField hasError={hasNameError} variant={"filled"} label={"Full Name"} value={name} onChange={handleNameOnChange} onBlur={handleNameOnBlur} fullWidth />
          
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField hasError={hasPhnError} value={phoneNumber} onChange={handleOnPhnChange} onBlur={handleOnPhnBlur}  variant={"filled"} label={"Phone Number"} fullWidth />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          
          <MyTextField ref={inputRef} hasError={hasLocationError} value={inputRef.current?inputRef.current.value:location} onChange={handleLocationOnChange} onBlur={handleLocationOnBlur} variant={"filled"} label={"Location"} fullWidth />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField variant={"filled"} label={"Email"} value={email} onChange={handleOnEmailChange} onBlur={handleOnEmailBlur} hasError={hasEmailError} fullWidth />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField
            variant={"filled"}
            label={"LinkedIn Profile URL"}
            fullWidth
            ref={linkdinRef}
          />
        </Grid>
      </Grid>
      <Grid container mb={3} justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField
            variant={"filled"}
            label={"Portfolio/Website URL"}
            fullWidth
            ref={portfolioRef}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalInfo;
