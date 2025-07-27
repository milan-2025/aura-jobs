import { Button } from "@mui/material";
import projectColors from "../assets/util/projectColors";

const ProjectButton = ({ isActive, children, ...props }) => {
  return (
    <Button
      // mx={2}
      sx={{
        // backgroundColor: projectColors.inputGrey,
        color: !isActive ? projectColors.textBlack : "",
        borderRadius: "25px",
        marginX: "0.5rem",
        paddingX: "1rem",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ProjectButton;
