import React from "react";
import {Box, CircularProgress, Container, Grid, Typography} from "@mui/material";

const Loading = (props: { loadingText: string }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around">
      <Grid item>
        <CircularProgress sx={{ml: 2}} />
        <Typography>{props.loadingText}</Typography>
      </Grid>
    </Grid>
  );
};

export default Loading;
