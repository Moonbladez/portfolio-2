import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component='nav'>
        <Toolbar>
          <Container>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Portfolio 2
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
