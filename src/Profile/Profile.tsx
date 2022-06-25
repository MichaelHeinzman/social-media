import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { User } from "../types";
import PostSectionOfProfile from "./PostSectionOfProfile";
import SettingsIcon from "@mui/icons-material/Settings";

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
  return (
    <div
      style={{
        paddingTop: 40,
        paddingBottom: 20,
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: 10,
      }}
    >
      {/* Profile Header */}
      <Grid container>
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
            <Typography fontSize={24}>{username}</Typography>
            <Button
              sx={{
                color: "black",
                border: "1px solid #CCCCCC",
                height: 30,
                width: 120,
              }}
            >
              Edit Profile
            </Button>
            <SettingsIcon sx={{ cursor: "pointer" }} />
          </Grid>

          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={3}>
              {posts.length} posts
            </Grid>
            <Grid item xs={3}>
              {followers.length} followers
            </Grid>
            <Grid item xs={3}>
              {following.length} following
            </Grid>
          </Grid>

          <Typography fontSize={16}>{name}</Typography>
        </Grid>

        {/* Posts, Followers and Following number */}
      </Grid>

      {/* Follow / Message Buttons */}
      <Grid container justifyContent="center" alignItems="center" gap={1}>
        <button>Follow</button>
        <button>Message</button>
      </Grid>

      {/* Post Section */}
      <PostSectionOfProfile posts={posts} />
    </div>
  );
};

export default Profile;
