import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer';

export default function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate("/"), 5000)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="ErrorPage">
            <Typography variant="h4">Uh oh, something went wrong! Try again later</Typography>
            <Footer />
        </div>
    )
}
