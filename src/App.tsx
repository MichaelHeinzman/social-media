import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import { User, userTemplate } from "./types";
import { Grid } from "@mui/material";
import Header from "./Header/Header";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const getUser = () => setUser(userTemplate);
  useEffect(() => getUser(), []);

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "rgb(250,250,250)",
      }}
    >
      <Header />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={11.5} sm={11} md={11} lg={7}>
          {user && <Profile {...user} />}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
