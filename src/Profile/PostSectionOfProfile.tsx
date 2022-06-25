import { Box, Button, Divider, Grid } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import UserPost from "../Components/UserPost";
import { apiPosts, Post } from "../types";

type Props = {
  posts: Array<string>;
  reels?: Array<string>;
  videos?: Array<string>;
  saved?: Array<string>;
  tagged?: Array<string>;
};

const PostSectionOfProfile = ({
  posts,
  reels,
  videos,
  saved,
  tagged,
}: Props) => {
  const [activePostSection, setActivePostSection] = useState("POSTS");

  const fetchPosts = useCallback(() => {
    return posts
      .map((postId: string) => apiPosts[postId])
      .map((post: Post, index) => <UserPost key={post.id + index} {...post} />);
  }, [posts]);

  const userPosts = useMemo(() => fetchPosts(), [fetchPosts]);

  const postTabs = {
    height: "100%",
    color: "black",
    borderRadius: 0,
  };
  const activePostTabs = {
    borderTop: "1px solid black",
    ...postTabs,
  };
  return (
    <>
      <Grid>
        <Divider />

        {/* Tabs for Posts */}
        <Grid container justifyContent="center" alignItems="center" gap={1}>
          <Button
            sx={activePostSection === "POSTS" ? activePostTabs : postTabs}
            onClick={() => setActivePostSection("POSTS")}
          >
            POSTS
          </Button>
          <Button
            sx={activePostSection === "REELS" ? activePostTabs : postTabs}
            onClick={() => setActivePostSection("REELS")}
          >
            REELS
          </Button>
          <Button
            sx={activePostSection === "VIDEOS" ? activePostTabs : postTabs}
            onClick={() => setActivePostSection("VIDEOS")}
          >
            VIDEOS
          </Button>
          <Button
            sx={activePostSection === "SAVED" ? activePostTabs : postTabs}
            onClick={() => setActivePostSection("SAVED")}
          >
            SAVED
          </Button>
          <Button
            sx={activePostSection === "TAGGED" ? activePostTabs : postTabs}
            onClick={() => setActivePostSection("TAGGED")}
          >
            TAGGED
          </Button>
        </Grid>
      </Grid>

      {/* Load Posts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: `repeat(${Math.ceil(userPosts.length / 3)}, 1fr)`,
          gridAutoFlow: "column",
          columnGap: { xs: 0.5, sm: 3 },
          rowGap: { xs: 0.5, sm: 3 },
          width: "100%",
        }}
      >
        {userPosts}
      </Box>
    </>
  );
};

export default PostSectionOfProfile;
