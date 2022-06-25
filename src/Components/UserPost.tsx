import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Post } from "../types";

import Favorite from "./Favorite";
import Comment from "./Comment";
import PostType from "./PostType";

type Props = Post;

const UserPost = ({
  id,
  type,
  description,
  images,
  likes,
  comments,
}: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 150, sm: 250, md: 300 },
        backgroundImage: `url(${images[0]})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        cursor: "pointer",
        "&:hover": {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.5)) , url(${images[0]})`,
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          position="relative"
          height="100%"
        >
          <Box sx={{ position: "absolute", top: 0, right: 0, padding: 1 }}>
            <PostType type={type} />
          </Box>
          <Grid container gap={1} justifyContent="center" alignItems="center">
            <Favorite likes={likes} />
            <Comment comments={comments} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default UserPost;
