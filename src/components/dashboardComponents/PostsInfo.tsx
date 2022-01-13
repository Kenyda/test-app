import React from 'react';
import {Button, Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const PostsInfo = () => {
    return (
        <Card sx={{mt: 3}}>
            <CardHeader title="А вы знали что..." />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item md={7}>
                        <Typography>
                            Кошки размахивают своими хвостами, когда стоят перед выбором,
                            при этом одно желание идет в разрез с другим.
                            Например, если кошка стоит в дверном проеме и хочет выйти, а на улице идёт дождь,
                            хвост будет раскачиваться из-за внутреннего конфликта.
                            Кошка хочет выйти, но не хочет промокнуть.
                            Как только она примет решение (остаться дома – или выйти под дождь), хвост сразу успокоится
                        </Typography>
                    </Grid>
                    <Grid item md={5}>
                        <img src={process.env.PUBLIC_URL + 'static/1569767e596938d48d583c7c8f6da332.png'} />
                    </Grid>
                </Grid>
                <Grid container
                      direction="row"
                      justifyContent="flex-end">
                    <Grid>
                        <NavLink to='/posts' className="navbarLink">
                            <Button size="small" >Больше интересных фактов</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default PostsInfo;