import { Button, FormHelperText, Grid, Typography, useTheme } from "@mui/material";
import MyTextField from "./MyTextField";
import { useEffect, useRef, useState } from "react";
import { useInput } from "../hooks/useInput";
import { isInteger, isNotEmpty, isValidEmail } from "../assets/util/formValidations";

const PersonalInfo = ({setCurrentStep,currentStep}) => {
  const theme = useTheme();

  const inputRef = useRef(null);
  // var mappedLoc = {};
  const [LocData,setLocData] = useState({});
   const linkdinRef = useRef(null);
    const portfolioRef = useRef(null);
  const [initValueState,setInitValue] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    location: '',
    linkdinUrl: '',
    portfolioUrl: ''
  });
  let myPersonalInfo = null
  useEffect(() => {
    // Check if the Google Maps script has loaded
    // setSavedClicked(false);
    
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
              let mappedLoc = {};
                mappedLoc.formattedAddress= place.formatted_address,
                mappedLoc.lat= place.geometry.location.lat(),
                mappedLoc.lon= place.geometry.location.lng(),
                mappedLoc.userLoc= inputRef.current.value
              setLocData(mappedLoc);
            
          }
      });
      }

      // get saved info from db or localstorage
      if(localStorage.getItem(currentStep)){
        console.log('in here')
       let myPersonalInf2 = JSON.parse(localStorage.getItem(currentStep))
       console.log('fetched my info ',myPersonalInf2);
       setName(myPersonalInf2.name)
       setEmail(myPersonalInf2.email);
       setPhn(myPersonalInf2.phoneNumber);
       setLoc(myPersonalInf2.LocData.userLoc);
       setLocData(myPersonalInf2.LocData);
      inputRef.current.value = myPersonalInf2.LocData.userLoc;
      linkdinRef.current.value = myPersonalInf2.linkdinUrl;
      portfolioRef.current.value = myPersonalInf2.portfolioUrl;
       


      }
    },[])

    const { enteredValue:name,setEnteredValue: setName, handleOnValueBlur:handleNameOnBlur, handleOnValueChange: handleNameOnChange, hasError:hasNameError } = useInput('',(value)=>{
      return isNotEmpty(value)
    }) // will be pre populated with name on login

    const { enteredValue:phoneNumber, setEnteredValue: setPhn, handleOnValueBlur:handleOnPhnBlur, handleOnValueChange:handleOnPhnChange, hasError:hasPhnError} = useInput('',(value)=>{
      const result1 = isNotEmpty(value);
      if(result1.chk){
        return isInteger(value);
      }
      else{
        return result1;
      }

    });

    const { enteredValue:email, setEnteredValue:setEmail, handleOnValueBlur:handleOnEmailBlur, handleOnValueChange:handleOnEmailChange, hasError: hasEmailError } = useInput('',(value)=>{
      return isNotEmpty(value).chk?isValidEmail(value):isNotEmpty(value);
    })

    const { enteredValue:location, setEnteredValue:setLoc, handleOnValueBlur:handleLocationOnBlur, handleOnValueChange: handleLocationOnChange, hasError:hasLocationError } = useInput('',(value)=>{
      return isNotEmpty(value)
    })
   


    const displayErrors = ()=>{
      console.log('i am here')
      handleNameOnBlur();
      handleOnEmailBlur();
      handleOnPhnBlur();
      handleLocationOnBlur();
    }


      const handleSaveClicked = ()=>{
        let errors = !hasEmailError.chk || !hasLocationError.chk || !hasPhnError.chk || !hasNameError.chk
        if(errors){
          displayErrors();
        }
        else{
          // save info to db or local-storage
          
          let data = {
            name,
            email,
            phoneNumber,
            LocData,
            linkdinUrl: linkdinRef.current.value,
            portfolioUrl: portfolioRef.current.value
          }
          console.log("form data-",data);
          console.log('locationData- ',data.LocData)
          localStorage.setItem(currentStep,JSON.stringify(data));
          setCurrentStep('proffessionalSummary')
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
          
          <MyTextField ref={inputRef} hasError={hasLocationError}  onChange={handleLocationOnChange} onBlur={handleLocationOnBlur} variant={"filled"} label={"Location"} fullWidth />
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
      <Grid container mb={4} size={12}>
          {/* <Grid > */}
          <Grid textAlign={"start"} size={6}>
        
               {/* <Button
                variant="contained"
                sx={{
                  borderRadius: "25px",
                }}
                color="inputGrey"
                onClick={handleBack}
                size="small"
              >
                Back
              </Button> */}
          
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

export default PersonalInfo;
