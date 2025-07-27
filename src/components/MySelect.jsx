import {
  Checkbox,
  Input,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";

const MySelect = ({ options, title, value, handleChange }) => {
  const theme = useTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <Select
      // labelId="demo-multiple-checkbox-label"
      // id="demo-multiple-checkbox"
      multiple
      displayEmpty
      // fullWidth
      value={value}
      onChange={handleChange}
      input={<Input />}
      renderValue={
        (selected) => (
          // if (selected.length === 0) {
          // return (
          <Typography
            variant="subtitle1"
            sx={{ color: theme.textBlack }}
            textAlign={"center"}
          >
            {title}
          </Typography>
        )

        // }
        // return selected.join(", ");
        // }}
      }
      sx={{
        borderRadius: "25px",
        backgroundColor: theme.inputGrey,
        paddingLeft: "0.9rem",
        paddingRight: "0.3rem",
        borderBottom: "0px",
        marginLeft: "0.7rem",
        "&::before, &::after": {
          borderBottom: "0px",
        },
        "&:hover:not(.Mui-disabled, .Mui-error):before": {
          borderBottom: "0px",
        },
        "&.Mui-focused:after": {
          borderBottom: "0px",
        },
        maxWidth: "175px",
      }}
      MenuProps={MenuProps}
    >
      <MenuItem disabled value="">
        <Typography variant="subtitle1" sx={{ color: theme.textBlack }}>
          {title}
        </Typography>
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          <Checkbox checked={value.includes(option)} />
          <ListItemText primary={option} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default MySelect;
