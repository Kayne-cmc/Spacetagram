import React from 'react';
import { CircularProgress, Backdrop } from '@mui/material';
import './Loading.css';

export default function Loading(props) {
    return (
        <div className="Loading">
            <Backdrop
                sx={{
                    color:'#fff',
                    zIndex:(theme) => theme.zIndex.drawer + 1,
                    display:"flex",
                    flexWrap:"wrap",
                    alignContent:"center"}}
                open={props.loading}
            >
                <div className="loading-content">
                    <p className="loading-logo">S</p>
                    <p className="loading-logo">P</p>
                    <p className="loading-logo">A</p>
                    <p className="loading-logo">C</p>
                    <p className="loading-logo">E</p>
                    <p className="loading-logo">T</p>
                    <p className="loading-logo">A</p>
                    <p className="loading-logo">G</p>
                    <p className="loading-logo">R</p>
                    <p className="loading-logo">A</p>
                    <p className="loading-logo">M</p>
                </div>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    )
}
