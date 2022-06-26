import { Box, Typography } from "@mui/material";
import React from "react";
import CommentIcon from "@mui/icons-material/Comment";

type Props = { comments: any };

const Comment = ({ comments }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <CommentIcon
        sx={{
          color: "white",
          fontSize: "medium",
        }}
      />
      <Typography color="white" fontSize="medium">
        {comments.length}
      </Typography>
    </Box>
  );
};

export default Comment;
