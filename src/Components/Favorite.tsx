import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
  likes: number;
};

const Favorite = ({ likes }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.5,
      }}
    >
      <FavoriteIcon sx={{ color: "white", fontSize: "medium" }} />
      <Typography color="white" fontSize="medium">
        {likes}
      </Typography>
    </Box>
  );
};

export default Favorite;
