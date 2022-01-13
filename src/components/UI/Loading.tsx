import React from 'react';
import {Box, CircularProgress, Container, Typography} from "@mui/material";

const Loading = (props: {loadingText: string}) => {
    return (
        <Box sx={{ position: 'relative', display: 'block' }}>
            <Box sx={{
                    margin: '0 auto',
                    display: 'block',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <CircularProgress />
                <Typography>{props.loadingText}</Typography>
            </Box>
        </Box>
    );
};

export default Loading;