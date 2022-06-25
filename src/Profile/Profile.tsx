import React, { useMemo, useState } from "react";
import UserPost from "../Components/UserPost";
import { Grid, Box, Divider } from "@mui/material";
import { User, apiPosts, Post } from "../types";

type Props = User;
const Profile = ({
  id,
  name,
  username,
  email,
  posts,
  conversations,
  picture,
}: Props) => {
  const userPosts = useMemo(
    () =>
      posts
        .map((postId: string) => apiPosts[postId])
        .map((post: Post) => <UserPost {...post} />),
    [posts]
  );

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
        <Grid item xs={6}>
          <div>Username: {username}</div>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
        </Grid>
      </Grid>

      {/* Follow / Message Buttons */}
      <Grid container justifyContent="center" alignItems="center" gap={1}>
        <button>Follow</button>
        <button>Message</button>
      </Grid>

      <Divider />

      {/* Tabs for Posts */}
      <Grid container justifyContent="center" alignItems="center" gap={1}>
        <button>POSTS</button>
        <button>REELS</button>
        <button>VIDEOS</button>
        <button>SAVED</button>
        <button>TAGGED</button>
      </Grid>

      {/* Load Posts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: `repeat(${Math.ceil(userPosts.length / 3)}, 1fr)`,
          gridAutoFlow: "column",
          columnGap: 0.5,
          rowGap: 0.5,
          width: "100%",
        }}
      >
        {userPosts}
      </Box>
    </div>
  );
};

export default Profile;
