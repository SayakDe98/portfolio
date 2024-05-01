import { Done } from "@mui/icons-material";
import { Card, Stack, Typography } from "@mui/material";
import React from "react";

const Skill = ({ skill }) => {
  return (
    <Card variant="outlined" sx={{ background: "#494F55", p: 2 }}>
      <Stack direction="row">
        <Done
          sx={{
            borderRadius: "50%",
            border: "1px solid green",
            background: "green",
            mr: 1,
            fontWeight: "bold",
          }}
        />
        <Typography sx={{ color: "white" }}>{skill}</Typography>
      </Stack>
    </Card>
  );
};

export default Skill;
