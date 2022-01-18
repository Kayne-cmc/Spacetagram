import React from 'react';
import { CircularProgress, Backdrop, Typography } from '@mui/material';

export default function Loading(props) {
    return (
        <div className="Loading">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={props.loading}
            >
                <Typography variant="h5">S</Typography>
                <Typography variant="h5">h</Typography>
                <Typography variant="h5">o</Typography>
                <Typography variant="h5">p</Typography>
                <Typography variant="h5">i</Typography>
                <Typography variant="h5">f</Typography>
                <Typography variant="h5">y</Typography>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}
