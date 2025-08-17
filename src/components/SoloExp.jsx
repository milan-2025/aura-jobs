import {
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import MyTextField from "./MyTextField";
import { MobileDatePicker } from "@mui/x-date-pickers";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useCallback, useState } from "react";
import { useInput } from "../hooks/useInput";
import { isNotEmpty, isValidDate, isValidDateRange } from "../assets/util/formValidations";

function getMonthAndYear(dateString) {
  // Create a new Date object from the input string.
  // The Date constructor is generally capable of parsing this format.
  const date = new Date(dateString);

  // Check if the date is valid.
  // new Date() can return an "Invalid Date" object if the string is unparseable.
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  // Define options for toLocaleDateString to get the full month name and numeric year.
  const options = {
    year: "numeric", // e.g., 2009
    month: "long", // e.g., March
  };

  // Use toLocaleDateString to format the date.
  // The 'en-US' locale is used here to ensure English month names.
  // You can change 'en-US' to another locale if you need different language month names.
  return date.toLocaleDateString("en-US", options);
}

const SoloExp = ({ setExperiences, setShowSoloExp }) => {
  const theme = useTheme();

  const {enteredValue:company, setEnteredValue:setCompany, handleOnValueBlur: handleOnCompanyBlur, handleOnValueChange:handleOnCompanyChange, hasError: hasCompanyError} = useInput('',(value)=>{
    return isNotEmpty(value)
  })
  const {enteredValue:title, setEnteredValue:setTitle, handleOnValueBlur: handleOnTitleBlur, handleOnValueChange:handleOnTitleChange, hasError: hasTitleError} = useInput('',(value)=>{
    return isNotEmpty(value);
  })
  const {enteredValue:startDate, setEnteredValue:setStartDate, handleOnValueBlur:handleOnStartDateBlur, handleOnValueChange: handleOnstartDateChange, hasError:hasStartDateError} = useInput(null,(value)=>{
    return isNotEmpty(value).chk?isValidDate(value):isNotEmpty(value)
  })
  const {enteredValue:endDate, setEnteredValue:setEndDate, handleOnValueBlur: handleOnEndDateBlur, hasError: hasEndDateError} = useInput(null,(value)=>{
    if(value){
      if(startDate){

        return isValidDateRange(startDate,value);
      }
    }
  });
  const [minDate,setMinDate] = useState(null);
  const [responsibilities, setResposibilities] = useState([
    { id: 1, value: "" },
  ]);

  const handleResponsibility = (value, id) => {
    setResposibilities((oldResponsibilities) => {
      let newResponsibilities = JSON.parse(JSON.stringify(oldResponsibilities));
      newResponsibilities[id - 1].value = value;
      return newResponsibilities;
    });
  }
  const addResponsibility = () => {
    setResposibilities((oldResponsibilities) => {
      let newResponsibilities = JSON.parse(JSON.stringify(oldResponsibilities));
      let len = newResponsibilities.length;
      let obj = {
        id: len + 1,
        value: "",
      };
      newResponsibilities[len] = obj;
      return newResponsibilities;
    });
  };

  const handleSaveExperience = () => {
    let myStartDate = getMonthAndYear(startDate.$d);
              let myEndDate = "Present";
              if (endDate) {
                myEndDate = getMonthAndYear(endDate.$d);
              }
              let obj = {
                company,
                title,
                myStartDate,
                myEndDate,
                responsibilities,
              };
              //   console.log("exp obj-", obj);
              setExperiences((oldExp) => {
                let newExp = JSON.parse(JSON.stringify(oldExp));
                console.log("newEXP-", newExp);
                newExp.push(obj);
                return newExp;
              });
              setShowSoloExp(false);
  };

  return (
    <Grid id="workexp" size={12} container justifyContent={"center"}>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField
            onChange={handleOnCompanyChange}
            value={company}
            onBlur={handleOnCompanyBlur}
            variant={"filled"}
            label={"Company Name"}
            hasError={hasCompanyError}
            fullWidth
          />
         
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <MyTextField
            variant={"filled"}
            onChange={handleOnTitleChange}
            onBlur={handleOnTitleBlur}
            hasError={hasTitleError}
            value={title}
            label={"Title"}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid
          mt={2}
          container
          justifyContent={"space-between"}
          size={{ xs: 12, lg: 5 }}
          spacing={2}
        >
          {/* <MyTextField variant={"filled"} label={"Title"} fullWidth /> */}
          <Grid size={6}>
            <MobileDatePicker
              label="Start Date"
              enableAccessibleFieldDOMStructure={false}
              // value={selectedDate}
              // onChange={(newValue) => setSelectedDate(newValue)}
              // Use the `slots` prop to provide your custom TextField component
              slots={{
                textField: MyTextField,
              }}
              // Pass additional props to MyTextField if needed
              slotProps={{
                textField: {
                  myPadding: false, // Example: enables your custom padding logic
                  variant: "filled",
                  label: "Start Date", // Ensure the TextField uses the outlined variant
                  fullWidth: true,
                  hasError:hasStartDateError,
                  onBlur: handleOnStartDateBlur
                  
                },
              }}
              onChange={(e) => {
                setStartDate(e);
                handleOnEndDateBlur();
                setMinDate(e);
              }}
              value={startDate}

            />
          </Grid>
          <Grid container alignItems={"strech"} size={6}>
            <MobileDatePicker
              label="End Date"
              enableAccessibleFieldDOMStructure={false}
              minDate={minDate}
              // value={selectedDate}
              // onChange={(newValue) => setSelectedDate(newValue)}
              // Use the `slots` prop to provide your custom TextField component
              slots={{
                textField: MyTextField,
              }}
              // Pass additional props to MyTextField if needed
              slotProps={{
                textField: {
                  myPadding: false, // Example: enables your custom padding logic
                  variant: "filled",
                  label: "End Date", // Ensure the TextField uses the outlined variant
                  fullWidth: true, // Make the TextField take full width
                  // helperText: 'Date cannot be before start date'
                  onBlur: handleOnEndDateBlur,
                  // hasError: hasEndDateError
                },
              }}
              onChange={(e) => {
                setEndDate(e);
              }}
              value={endDate}
            />
            {/* <FormHelperText mt>Leave blank to set to present</FormHelperText> */}
            {hasEndDateError && !hasEndDateError.chk ? <Typography color="error" m={0} mt={-1.4} ml={1} variant="caption">
              {hasEndDateError.message}
            </Typography> :  <Typography m={0} mt={-1.4} ml={1} variant="caption">
              Leave blank to set to present
            </Typography>}
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} size={12}>
        <Grid ml={1} size={{ xs: 12, lg: 5 }}>
          {/* <MyTextField variant={"filled"} label={"Title"} fullWidth /> */}
          <Typography
            variant="body2"
            fontWeight={400}
            sx={{ display: "inline", color: theme.textBlack }}
          >
            Responsibilities
          </Typography>
          <Tooltip title="Add Another Responsibility">
            <IconButton
              sx={{
                // verticalAlign: "middle",
                paddingBottom: "0.4em",
              }}
              color="primary"
              onClick={addResponsibility}
            >
              <AddCircleIcon
                sx={
                  {
                    // verticalAlign: "middle",
                    // fontSize: "1em",
                    // marginLeft: "1em",
                    // marginTop: "0.5rem",
                  }
                }
              />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      {responsibilities.map((item) => {
        return (
          <Grid
            key={item.id}
            mb={1.5}
            container
            justifyContent={"center"}
            size={12}
          >
            <Grid ml={1} size={{ xs: 12, lg: 5 }}>
              <MyTextField
                variant={"filled"}
                label={`Responsibility ${item.id}`}
                fullWidth
                multiline={true}
                rows={2}
                value={item.value}
                onChange={(e) => {
                  handleResponsibility(e.target.value, item.id);
                }}
                // myPadding={true}
              />
            </Grid>
          </Grid>
        );
      })}
      <Grid container justifyContent={"center"} size={12}>
        <Grid mt={2} size={{ xs: 12, lg: 5 }}>
          <Button
            onClick={() => {
              handleSaveExperience()
            }}
            variant="contained"
            color="primary"
            size="small"
            fullWidth
          >
            {" "}
            Save Experience
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SoloExp;
