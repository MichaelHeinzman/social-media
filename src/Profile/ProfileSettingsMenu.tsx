import { Box, Button, Grid } from "@mui/material";
import React from "react";

type Props = {
  setSettingsOpened: any;
};

const ProfileSettingsMenu = ({ setSettingsOpened }: Props) => {
  const settingsButtonStyle = {
    color: "black",
    width: "100%",
    height: 50,
    fontSize: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #cccccc",
    cursor: "pointer",
  };
  return (
    <Grid
      item
      container
      onClick={() => setSettingsOpened(false)}
      sx={{
        height: "100%",
        padding: { xs: 2, md: 0 },
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
        backgroundColor: "rgb(0, 0, 0, .6)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "start", sm: "center" },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "50%", lg: "20%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <Button sx={settingsButtonStyle}>Change Password</Button>
        <Button sx={settingsButtonStyle}>QR Code</Button>
        <Button sx={settingsButtonStyle}>Apps and Websites</Button>
        <Button sx={settingsButtonStyle}>Notifications</Button>
        <Button sx={settingsButtonStyle}>Privacy and Security</Button>
        <Button sx={settingsButtonStyle}>Supervision</Button>
        <Button sx={settingsButtonStyle}>Login Activity</Button>
        <Button sx={settingsButtonStyle}>Emails from Instagram</Button>
        <Button sx={settingsButtonStyle}>Report a Problem</Button>
        <Button sx={settingsButtonStyle}>Embed</Button>
        <Button sx={settingsButtonStyle}>Log Out</Button>
        <Button
          sx={settingsButtonStyle}
          onClick={() => setSettingsOpened(false)}
        >
          Cancel
        </Button>
      </Box>
    </Grid>
  );
};

export default ProfileSettingsMenu;
