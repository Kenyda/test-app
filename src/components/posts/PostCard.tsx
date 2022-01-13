import React from 'react';
import {Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography} from "@mui/material";
import {IPost} from "../../pages/Posts";
import {NavLink} from "react-router-dom";
import MediaContainer from "../MediaContainer";

const PostCard = (props: {data: IPost, count: number}) => {
    return (
        <NavLink to={`/posts/${props.data.id}`} className="navbarLink">
            <Card sx={{mt: 3}}>
                <CardHeader title={`Факт №${props.count}`} />
                <CardContent>
                    <Grid container
                          direction="row"
                          justifyContent="space-around">
                        <Grid item xs={12} md={4}>
                            <MediaContainer path={props.data.media} playVideo={false}/>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography sx={{mb: 3}}>{props.data.description}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </NavLink>

    );
};

export default PostCard;