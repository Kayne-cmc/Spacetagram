import React from 'react';
import { Zoom, Box, useScrollTrigger } from '@mui/material';

export default function ScrollToTop(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });

    function handleClick(event) {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if(anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }

    return (
        <div className="scrollToTop">
            <Zoom in={trigger}>
                <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 70, right: 32 }}>{children}</Box>
            </Zoom>
        </div>
    )
}
