import React, { useMemo, useState } from "react";
import UserPost from "../Components/UserPost";
import { Grid, Box } from "@mui/material";
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
    <Grid container spacing={1} padding={1}>
      {/* Profile Header */}
      <Grid item xs={12}>
        <Grid container sx={{ height: 250 }}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
      </Grid>

      {/* Follow / Message Buttons */}
      <Grid item container xs={12}>
        <button>Follow</button>
        <button>Message</button>
      </Grid>

      {/* Tabs for Posts */}
      <Grid item container xs={12}>
        <button>Posts</button>
        <button>Videos</button>
        <button>Tagged</button>
      </Grid>

      {/* Load Posts */}
      <Grid item xs={12} md={10}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
            gap: 1,
          }}
        >
          {userPosts}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
