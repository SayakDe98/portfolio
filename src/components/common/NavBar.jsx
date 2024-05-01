import {
  KeyboardArrowRight,
  ArrowBack,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const sections = ["Home", "Skills", "Projects"];
  const currentSection = window.location.pathname.split("/")[1];
  const currentPage = window.location.href.split("/")[3];
  const [anchorEl, setAnchorEl] = useState("");
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen((prev) => !prev);
  };
  const handleClose = () => setOpen(false);
  return (
    <Stack
      sx={{ background: "#F8F8FF" }}
      direction="row"
      justifyContent="space-between"
      p={1.5}
    >
      {matchDownMd ? (
        currentPage !== "contact-me" ? (
          <Stack flexDirection="row" gap={1}>
            <MenuIcon
              onClick={handleClick}
              sx={{ cursor: "pointer", alignSelf: "center" }}
            />

            <Menu variant="menu" open={open} anchorEl={anchorEl}>
              {sections?.map((section) => (
                <MenuItem
                  onClick={handleClose}
                >
                  <a
                    href={`#${section.toLowerCase()}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {section}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        ) : (
          <ArrowBack
            onClick={() => navigate("/")}
            sx={{ alignSelf: "center", cursor: "pointer" }}
          />
        )
      ) : (
        <Typography
          variant="h4"
          sx={{ cursor: currentPage === "contact-me" ? "pointer" : "default" }}
          onClick={() => currentPage === "contact-me" && navigate("/")}
        >
          {currentPage === "contact-me" ? (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <ArrowBack fontSize="16" />
              <Typography variant="h4">Go Back</Typography>
            </Stack>
          ) : (
            "Sayak's Portfolio"
          )}
        </Typography>
      )}
      {currentPage !== "contact-me" && !matchDownMd && (
        <Stack direction="row" gap={5}>
          {sections.map((section) => (
            <Typography
              variant="h6"
              key={section}
              sx={{
                textDecoration:
                  currentSection === section.toLowerCase() ||
                  (!currentSection && section === "Home")
                    ? "underline"
                    : "none",
                cursor: "pointer",
              }}
            >
              <a href={`#${section.toLowerCase()}`} style={{ color: "black" }}>
                {section}
              </a>
            </Typography>
          ))}
        </Stack>
      )}

      {currentPage !== "contact-me" && (
        <Button
          onClick={() => navigate("/contact-me")}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "black",
            borderColor: "black",
            "&:hover": {
              background: "black",
              color: 'white'
            },
          }}
        >
          <Typography>Contact Me</Typography>
          <KeyboardArrowRight />
        </Button>
      )}
    </Stack>
  );
};

export default NavBar;
