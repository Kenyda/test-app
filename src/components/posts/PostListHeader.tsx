import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { FACTS_INTRODUCTION } from "../../utils/texts";

const PostListHeader = () => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item md={9}>
            <Typography sx={{ mb: 3 }}>{FACTS_INTRODUCTION}</Typography>
          </Grid>
          <Grid item md={3}>
            <img
              className="mediaContainer"
              src={`/${process.env.PUBLIC_URL}static/cat_profile.jpg`}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <NavLink to="/posts/create" className="navbarLink">
              <Button size="small" variant="outlined">
                Дополнить список фактов
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostListHeader;
