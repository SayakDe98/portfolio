import { Send } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import Sayak from "../assets/sayak.png";
import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      id="home"
      minHeight={{ xs: 0, md: "95.5vh" }}
      display="flex"
      alignItems={{ xs: "center", md: "flex-end" }}
      m={0}
      p={0}
      flexWrap="wrap"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Grid
        item
        xs={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
      >
        <Stack gap={3}>
          <Stack direction="row" alignItems="center">
            <Typography variant="h2">Sayak De</Typography>
            <span style={{ fontSize: 40 }}>✌️</span>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <Divider sx={{ width: "10%", background: "black" }} />
            <Typography variant="h6">Full Stack Developer</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" color="grey">
            <Typography sx={{ fontWeight: "bold" }}>
              I am a MERN stack developer based in Pune, <br /> and I'm very
              passionate and dedicated to my work.
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                background: "#5D3FD3",
                color: "white",
                "&:hover": {
                  background: "#4d37a5",
                },
              }}
              onClick={() => navigate("/contact-me")}
            >
              <Typography>Say Hello </Typography>
              <Send
                sx={{
                  transform: "rotate(330deg)",
                  ml: 1,
                  mb: 1
                }}
              />
            </Button>
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="flex-end"
        flexWrap="wrap"
      >
        <Box
          height={{ xs: 250, sm: 400, md: 800 }}
          marginRight={{ xs: 0, md: "5rem" }}
        >
          <img
            src={Sayak}
            alt="sayak"
            height="100%"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Landing;
