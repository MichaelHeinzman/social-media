import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import { User, userTemplate } from "./types";
import { Grid } from "@mui/material";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const getUser = () => setUser(userTemplate);
  useEffect(() => getUser(), []);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={11.5} md={7}>
        {user && <Profile {...user} />}
      </Grid>
    </Grid>
  );
}

export default App;
