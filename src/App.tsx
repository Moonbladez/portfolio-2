import { Navbar } from "./components/navbar";
import { RepoCard } from "./components/card";
import { Container, Grid } from "@mui/material";

import { data } from "./utils/repodata";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className='App' style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Container component='main' sx={{ p: 3, mt: 10, flex: 1 }}>
        <Grid
          container
          rowSpacing={{ xs: 6, sm: 2 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((repo, index) => (
            <Grid xs={12} sm={4} key={index} item>
              <RepoCard repo={repo} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
