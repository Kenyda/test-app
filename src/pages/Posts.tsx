import React, {Dispatch, useEffect, useState} from 'react';
import PostCard from "../components/posts/PostCard";
import {Button, Container, Grid} from "@mui/material";
import PostsAPI from "../api/PostsAPI";
import {NavLink} from "react-router-dom";
import Loading from "../components/UI/Loading";
import PostListHeader from "../components/posts/PostListHeader";

export interface IPost {
    id: number;
    description: string;
    media: string;
}

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