import React from 'react';
import {Container, Grid} from "@mui/material";
import SchedulesInfo from "../components/dashboardComponents/SchedulesInfo";
import PostsInfo from "../components/dashboardComponents/PostsInfo";

const Dashboard = () => {

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <SchedulesInfo/>
                </Grid>
                <Grid item md={6}>
                    <PostsInfo/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;