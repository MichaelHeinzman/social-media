import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { User } from "../types";
import PostSectionOfProfile from "./PostSectionOfProfile";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/system";
import ProfileSettingsMenu from "./ProfileSettingsMenu";

type Props = User;
const Profile = ({
  id,
  name,
  username,
  email,
  posts,
  followers,
  following,
  conversations,
  picture,
}: Props) => {
  const [settingsOpened, setSettingsOpened] = useState(false);
  const handleEditProfileClicked = () => {};
  const handleSettingsClicked = () => setSettingsOpened(true);

  return (
    <div
      style={{
        paddingTop: 40,
        paddingBottom: 20,
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        overflow: settingsOpened ? "hidden" : "",
        gap: 10,
      }}
    >
      {/* Profile Header */}
      <Grid container paddingBottom={10}>
        <Grid item container xs={4} justifyContent="center" alignItems="start">
          <img
            src={picture}
            alt="Profile"
            style={{
              objectFit: "contain",
              height: 140,
              width: 140,
              borderRadius: "50%",
            }}
          />
        </Grid>
        <Grid
          item
          container
          flexDirection="column"
          alignItems="space-between"
          justifyContent="start"
          xs={5}
          gap={2}
        >
          <Grid container justifyContent="start" alignItems="center" gap={4}>
            <Typography
              sx={{
                fontSize: 24,
                textTransform: "lowercase",
                fontWeight: "light",
              }}
            >
              {username}
            </Typography>
            <Button
              sx={{
                color: "black",
                border: "1px solid #CCCCCC",
                height: 30,
                width: 120,
              }}
              onClick={handleEditProfileClicked}
            >
              Edit Profile
            </Button>
            <SettingsIcon
              sx={{ cursor: "pointer" }}
              onClick={handleSettingsClicked}
            />
          </Grid>

          {settingsOpened && (
            <ProfileSettingsMenu setSettingsOpened={setSettingsOpened} />
          )}

          <Grid container justifyContent="space-between" alignItems="end">
            <Grid item xs={3}>
              {posts.length} posts
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              {followers.length} followers
            </Grid>
            <Grid item xs={3} sx={{ cursor: "pointer" }}>
              {following.length} following
            </Grid>
          </Grid>

          <Typography fontSize={16}>{name}</Typography>
        </Grid>

        {/* Posts, Followers and Following number */}
      </Grid>

      {/* Post Section */}
      <PostSectionOfProfile posts={posts} />
    </div>
  );
};

export default Profile;
