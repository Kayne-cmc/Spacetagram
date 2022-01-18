import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { light, dark } from "./themes";

//Components
import Menu from './components/Menu';
import Home from './components/routes/Home/Home';
import Posts from './components/routes/Posts/Posts';
import Liked from './components/routes/Liked/Liked';

//Material-UI
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Paper } from '@mui/material'

import './App.css';

function App() {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;

    const [theme, setTheme] = useState();
    const [loading, setLoading] = useState(false);

    let userTheme = createTheme(theme ? dark : light);

    userTheme = responsiveFontSizes(userTheme);

    return (
        <ThemeProvider theme={userTheme}>
            <Paper sx={{ minHeight: "100vh" }}>
                <div className="App">
                    <BrowserRouter>
                        <Menu theme={theme} setTheme={setTheme} />
                        <Routes>
                            <Route path="/" element={<Home loading={loading} setLoading={setLoading} apiKey={apiKey}/>} />

                            <Route path="/posts" element={<Posts loading= {loading} setLoading={setLoading} apiKey={apiKey} />} />

                            <Route path="/liked" element={<Liked loading={loading} setLoading={setLoading} apiKey={apiKey}/>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
