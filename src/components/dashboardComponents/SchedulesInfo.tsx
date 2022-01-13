import React from 'react';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import {BREEDS_LIST_DATA} from "../../utils/texts";
import {NavLink} from "react-router-dom";

const SchedulesInfo = () => {
    return (
        <Card sx={{mt: 3}}>
            <CardHeader title="Насколько коты популярны?" />
            <CardContent>
                <Typography>Мода на породы кошек изменчива.
                    Но меняется она не так часто, как мода, скажем, на одежду или дизайн интерьеров.
                    В кошачьем мире, если уж порода стала востребованной,
                    она продержится на Олимпе куда больше года, как например:
                </Typography>
                <List dense={true}>
                    {BREEDS_LIST_DATA.map((el, index) =>
                        <ListItem key={el.name}>
                            <ListItemText
                                primary={`${index + 1}. ${el.name}`}
                                secondary={el.description}
                            />
                        </ListItem>,
                    )}
                </List>

                <Grid container
                      direction="row"
                      justifyContent="flex-end">
                    <Grid>
                        <NavLink to='/schedules' className="navbarLink">
                            <Button size="small" >Узнать больше</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SchedulesInfo;