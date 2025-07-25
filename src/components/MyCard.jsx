import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
// import { useTheme } from "react-native-paper";
const MyCard = ({ image, imageTitle, title, text }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        // maxWidth: 345
        height: "100%",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title={imageTitle} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          textAlign={"justify"}
          variant="body2"
          sx={{ color: theme.textBlack }}
        >
          {text}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default MyCard;
