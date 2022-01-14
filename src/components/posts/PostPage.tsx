import React, {useEffect, useState} from 'react';
import PostsAPI from "../../api/PostsAPI";
import {useParams} from "react-router-dom";
import {IPost} from "../../utils/types";
import {Card, CardContent, Container, Grid, Typography} from "@mui/material";
import Loading from "../UI/Loading";
import MediaContainer from "../MediaContainer";

const PostPage = () => {
    let { id } = useParams();

    let [data, setData] = useState<IPost | null>(null);
    let [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (id) {
            setIsLoading(true)
            PostsAPI.get(parseInt(id)).then((response: IPost) => {
                if (response) setData(response);
            }).finally(() => setIsLoading(false))
        }
    }, [id])

    return (
        <Container maxWidth="lg">
            {isLoading && <Loading loadingText={"Загрузка..."}/>}
            {(!isLoading && data) &&
                <Card sx={{mt: 3}}>
                    <CardContent>
                        <Grid container
                              spacing={2}
                              direction="row"
                              justifyContent="space-around">
                            <Grid item xs={12} md={3}>
                                <MediaContainer path={data.media} playVideo={true}/>
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Typography sx={{mb: 3}}>{data.description}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            }
        </Container>
    );
};

export default PostPage;