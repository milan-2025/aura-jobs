import { Grid, Typography, useTheme } from "@mui/material";
import MyCard from "./MyCard";

const HeroSection = () => {
  const theme = useTheme();

  const cardData = [
    {
      image: "/Jumbotron.png",
      imageTitle: "jumbotron",
      title: "Precision Job Matching",
      text: `Don't just search, discover! Our skill-based job search connects
              you with roles that perfectly align with your expertise, saving
              you time and boosting your chances.`,
    },
    {
      image: "/Jumbotron.png",
      imageTitle: "jumbotron",
      title: "Stand Out with a Stellar Resume",
      text: `Craft an application that gets noticed. Our intuitive resume builder helps you create professional, impactful resumes tailored to specific jobs, even if you've never made one before.`,
    },
    {
      image: "/Jumbotron.png",
      imageTitle: "jumbotron",
      title: "Prove Your Prowess with AI Quizzes",
      text: `Showcase your true potential. Take skill-based AI quizzes to validate your abilities and impress recruiters before you even apply. It's your chance to shine!`,
    },
    {
      image: "/Jumbotron.png",
      imageTitle: "jumbotron",
      title: "Direct Connection to HR",
      text: `No more waiting games. Our built-in chat with HR feature allows you to connect directly with hiring managers, ask questions, and make a lasting impression.`,
    },
  ];
  return (
    <>
      <Grid container justifyContent={"center"} size={12}>
        <Grid container justifyContent={"center"} size={10}>
          <Typography
            mb={3}
            textAlign={"center"}
            color={theme.textBlack}
            variant="h5"
          >
            Why Choose Us?
          </Typography>
          <Grid container mb={4} spacing={3} size={12}>
            {cardData.map((item) => {
              return (
                <Grid key={item.title} size={{ md: 6, lg: 3 }}>
                  <MyCard {...item} />
                </Grid>
              );
            })}
            {/* <MyCard
                image={"/Jumbotron.png"}
                imageTitle={"jumbotron"}
                title={"Precision Job Matching"}
                text={` Don't just search, discover! Our skill-based job search connects
              you with roles that perfectly align with your expertise, saving
              you time and boosting your chances.`} */}
            {/* /> */}
          </Grid>
          {/* <Grid size={{ md: 10, lg: 6 }}></Grid> */}
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
