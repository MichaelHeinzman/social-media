import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Post } from "../types";

import Favorite from "./Favorite";
import Comment from "./Comment";

type Props = Post;

const UserPost = ({ id, description, images, likes, comments }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <Grid
      item
      sx={{
        height: 250,
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
          height="100%"
          width="100%"
        >
          <Grid
            item
            container
            xs={12}
            gap={1}
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
          >
            <Favorite likes={likes} />
            <Comment comments={comments} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default UserPost;
