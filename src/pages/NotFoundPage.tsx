import React from "react";
import { Card, CardContent, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container maxWidth="lg">
      <Card>
        <CardContent
          style={{
            background: `url(/${process.env.PUBLIC_URL}static/sad_cats.jpg) no-repeat center center`,
          }}
          className="notFoundPageContainer"
        >
          <div className="notFoundPageContent">
            <Typography className="notFoundPageText" variant={"h5"}>
              Страница не найдена...
            </Typography>
            <NavLink to={"/"} className="notFoundPageLink">
              На главную
            </NavLink>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NotFoundPage;
