import { Box, Grid, Typography } from "@mui/material";
import SearchBar from "../Components/SearchBar";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddBoxIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
type Props = {};

const Header = (Props: Props) => {
  const searchBarValues = {
    setSearchValue: () => {},
    borderColor: "#CCCCCC",
    inputColor: "#CCCCCC",
    labelColor: "#CCCCCC",
    focusedBorderColor: "#CCCCCC",
    focusedInputColor: "#CCCCCC",
    textValue: "Search",
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: 60,
        backgroundColor: "white",
        borderBottom: "1px solid #CCCCCC",
      }}
    >
      <Grid container justifyContent="center" alignItems="center" height="100%">
        <Grid
          item
          container
          xs={11.5}
          sm={11}
          lg={7}
          height="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Title */}
          <Grid
            item
            container
            xs={4}
            justifyContent="start"
            alignItems="center"
          >
            <Typography fontSize="large">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶 𝓒𝓵𝓸𝓷𝓮</Typography>
          </Grid>

          <Grid
            item
            container
            xs={8}
            justifyContent="space-around"
            alignItems="center"
          >
            {/* SearchBar */}
            <Grid
              item
              container
              xs={6}
              alignItems="center"
              justifyContent="center"
            >
              <SearchBar {...searchBarValues} />
            </Grid>
            {/* Tabs */}
            <Grid
              item
              container
              xs={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <HomeIcon cursor="pointer" />{" "}
              <ChatBubbleOutlineIcon cursor="pointer" />{" "}
              <AddBoxIcon cursor="pointer" />
              <ExploreIcon cursor="pointer" />
              <FavoriteIcon cursor="pointer" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
