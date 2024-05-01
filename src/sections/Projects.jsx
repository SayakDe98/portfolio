import { Code } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import EMarket from "../assets/EMarket.webm";
import MeetSamantha from "../assets/MeetSamantha.webm";
import ScreenAndVideoRecorder from "../assets/ScreenAndVideoRecorder.webm";

const Projects = () => {
  const videos = [EMarket, MeetSamantha, ScreenAndVideoRecorder];
  return (
    <Stack alignItems="center" justifyContent="center" id="projects">
      <Code fontSize="large" sx={{ color: "grey" }} />
      <Typography variant="h4">Apps I've Built</Typography>
      <Typography>
        Below are my personal projects. Take a glance at them work:
      </Typography>
      <Grid container gap={1} alignItems="center" justifyContent="center">
        {videos.map((source, index) => (
          <Grid item xs={5.9} key={index}>
            <video src={source} height="100%" width="100%" autoPlay>
              <source src={source} type="video/webm" />
            </video>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Projects;
