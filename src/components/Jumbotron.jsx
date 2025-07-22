import { Button, Grid, Typography } from "@mui/material";
import projectColors from "../assets/util/projectColors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// import jumbotronImage from "../assets/images/Jumbotron.png";

const Jumbotron = () => {
  const theme = useTheme();

  const inMobile = useMediaQuery(theme.breakpoints.down("md"));

  const laptopContent = (
    <Grid
      size={10}
      sx={{
        position: "absolute",
        // left: "10em",
      }}
      container
    >
      <Typography
        sx={{
          position: "relative",
          left: "8em",
          width: "50%",
          color: projectColors.textBlack,
        }}
        variant="h3"
        textAlign={"center"}
      >
        Find Jobs That Match Your Aura.
      </Typography>
      <Grid
        size={6}
        sx={{
          position: "relative",
          left: "24.2em",
          // width: "45%",
          textAlign: "center",
        }}
        justifyContent={"center"}
      >
        <Button variant="contained" size="large" color="primary">
          Sign Up
        </Button>
        <Button
          sx={{
            // backgroundColor: projectColors.inputGrey,
            // color: projectColors.textBlack,
            marginLeft: "2em",
          }}
          variant="contained"
          size="large"
          color="inputGrey"
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          backgroundImage: 'url("/jumbotron-2.png")',
          backgroundSize: "100vw 100vh", // Adjust as needed (cover, contain, etc.)
          backgroundRepeat: "no-repeat",
          height: "110vh",
          marginTop: "-11vh",
          // position: "absolute",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {!inMobile ? (
          laptopContent
        ) : (
          <>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Grid position={"absolute"} size={7}>
                <Typography
                  color={theme.textBlack}
                  variant="h6"
                  component={"h1"}
                  position={"relative"}
                  left={"3em"}
                  // left={"3em"}
                >
                  Find Jobs That Match Your Aura.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              position={"absolute"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid position={"relative"} size={12} top={"4em"} left={"2.8em"}>
                <Button variant="contained" size="medium" color="primary">
                  Sign Up
                </Button>
                <Button
                  sx={{
                    // backgroundColor: projectColors.inputGrey,
                    // color: projectColors.textBlack,
                    marginLeft: "2em",
                  }}
                  variant="contained"
                  size="medium"
                  color="inputGrey"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Jumbotron;
