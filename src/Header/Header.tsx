import { Box, Grid } from "@mui/material";

type Props = {};

const Header = (Props: Props) => {
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
          md={7}
          height="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Title */}
          <div>Instagram</div>
          {/* SearchBar */}
          <div>SearchBar</div>
          {/* Tabs */}
          <div>Tabs</div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
