import { FC } from "react";
import { Box, Container, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

export const Footer: FC = () => {
  return (
    <Box component='footer' sx={{ backgroundColor: "primary.dark", color: "white", p: 3 }}>
      <Container>
        <Link
          href='https://github.com/Moonbladez'
          target='_blank'
          rel='noopener'
          sx={{
            color: "white",
            mr: 2,
            "&:hover": {
              color: "grey",
            },
          }}
        >
          <GitHub />
        </Link>
        <Link
          href='https://www.linkedin.com/in/rebecca-young83/'
          target='_blank'
          rel='noopener'
          sx={{
            color: "white",
            "&:hover": {
              color: "grey",
            },
          }}
        >
          <LinkedIn />
        </Link>
      </Container>
    </Box>
  );
};
