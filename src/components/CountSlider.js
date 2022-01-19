import React from 'react';
import { Box, Slider, Typography, Button } from '@mui/material';
import './CountSlider.css'

export default function CountSlider(props) {
    return (
        <div className="CountSlider full-width">
            <Typography variant="h6" sx={{ width:"100%" }}>How many images would you like to see?</Typography>
            <Box sx={{ width:300 }}>
                <Typography variant="body1">{props.count}</Typography>
                <Slider
                    min={0}
                    max={40}
                    value={props.count}
                    onChange={props.changeCount}
                />
                <Button onClick={() => props.search("count")}>Find</Button>
            </Box>
        </div>
    )
}
