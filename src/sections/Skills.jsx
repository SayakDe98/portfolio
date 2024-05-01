import { Memory } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Skill from "../components/Skill";

const Skills = () => {
  const skills = ["JavaScript", "HTML", "CSS", "ReactJs", "NodeJs", "MongoDB"];
  return (
    <Grid
      container
      id="skills"
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Stack alignItems="center">
          <Memory fontSize="large" />
          <Typography variant="h4" sx={{textWrap: "wrap"}}>Skills & Technologies</Typography>
          <Typography>
            I am proficient in the following:
          </Typography>
        </Stack>
      </Grid>
      <Grid item>
        <Grid container gap={1} justifyContent="center">
          {skills.map((skill) => (
            <Grid item xs={5.9} key={skill}>
              <Skill skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
