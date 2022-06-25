import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CollectionsIcon from "@mui/icons-material/Collections";
type Props = {
  type: string;
};

const PostType = ({ type }: Props) => {
  if (type === "VIDEO") return <PlayArrowIcon sx={{ color: "white" }} />;
  if (type === "COLLECTION") return <CollectionsIcon sx={{ color: "white" }} />;
  return <div></div>;
};

export default PostType;
