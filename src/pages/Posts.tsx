import React, {useEffect, useState} from 'react';
import PostCard from "../components/posts/PostCard";
import {Container, Grid} from "@mui/material";
import PostsAPI from "../api/PostsAPI";
import Loading from "../components/UI/Loading";
import PostListHeader from "../components/posts/PostListHeader";
import {IPost} from "../utils/types";

const Posts = () => {
    let [data, setData] = useState<IPost[]>([]);
    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        PostsAPI.list().then((response) => {
            setData(response);
        }).finally(() => setIsLoading(false))
    }, [])

    return (
        <Container maxWidth="lg">
            <PostListHeader/>
            {isLoading
                ? <Loading loadingText={"Загрузка..."}/>
                : <Grid container spacing={{sm: 2}}>{data.map((fact: IPost, index) =>
                    <Grid key={fact.id}
                          item sm={6}>
                        <PostCard data={{id: fact.id, description: fact.description, media: fact.media}}
                                  count={index + 1}/>
                    </Grid>
                )}</Grid>
            }
        </Container>
    );
};

export default Posts;