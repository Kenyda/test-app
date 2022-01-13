import React from 'react';
import {Card, CardContent, CardHeader, Container, Grid, Typography} from "@mui/material";
import ActivitySchedule from "../components/schedules/ActivitySchedule";
import PopularitySchedule from "../components/schedules/PopularitySchedule";
import BreedsSchedule from "../components/schedules/BreedsSchedule";
import PopularityTable from "../components/PopularityTable";

const Charts = () => {
    const ACTIVITY_SCHEDULE_CARD_TEXT = 'Если ваша кошка лежит с закрытыми глазами и кажется, что она спит,\n' +
        '                        то на самом деле она скорее дремлет, чем спит.\n' +
        '                        Ваша кошка - хищник по своей природе.\n' +
        '                        Они должны обладать способностью мгновенно проснуться,\n' +
        '                        если их что-то напугает, поэтому часто они дремлют, а не спят.'

    return (
        <Container maxWidth="lg">
            <Card sx={{mt: 3}}>
                <CardHeader title="Активность кота в течение суток" />
                <CardContent>
                    <Typography sx={{mb: 3}}>{ACTIVITY_SCHEDULE_CARD_TEXT}</Typography>
                    <Grid container justifyContent="space-around">
                        <Grid item md={10}>
                            <ActivitySchedule/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card sx={{mt: 3}}>
                <CardHeader title="Страны ЛИДЕРЫ по количеству КОТИКОВ" />
                <CardContent>
                    <Grid container spacing={2} justifyContent="space-around">
                        <Grid item md={8}>
                            <PopularityTable />
                        </Grid>
                        <Grid item md={4}>
                            <PopularitySchedule/>
                        </Grid>
                    </Grid>
                    <Typography className="description">
                        Статистика примерная, и по большей части высчитывалась
                        по продажам кормов для питомцев.</Typography>
                </CardContent>
            </Card>

            <Card sx={{mt: 3, mb: 3}}>
                <CardHeader title="10 самых популярных пород кошек в СНГ и Европе" />
                <CardContent>
                    <Grid container justifyContent="space-around">
                        <Grid item md={8}>
                            <BreedsSchedule/>
                            <Typography className="description">
                                При составлении рейтинга использовалась
                                статистика запросов различных пород кошек в интернете.
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Charts;