import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css'

//Components
import Post from './Post';
import ScrollToTop from './ScrollToTop';
import ErrorPage from '../Error/ErrorPage';
import Loading from '../../Loading';
import CountSlider from '../../CountSlider';
import DateSelector from '../../DateSelector';
import Footer from '../../Footer';

import { Fab, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Posts(props) {
    const [results, setResults] = useState();
    const [count, setCount] = useState(20);
    const [startDate, setStartDate] = useState(getCurrentDate());
    const [endDate, setEndDate] = useState(getCurrentDate());

    function getCurrentDate() {
        let today = new Date();
        const offset = today.getTimezoneOffset();
        today = new Date(today.getTime() - (offset*60*1000));

        return today.toISOString().split('T')[0];
    }

    function changeCount(event, count) {
        setCount(count);
    }

    function search(searchType) {
        props.setLoading(true);

        if (searchType === "count") {
            axios
                .get(`https://api.nasa.gov/planetary/apod?api_key=${props.apiKey}&count=${count}&thumbs=true`)
                .then(result => {
                    setResults(result.data);
                    props.setLoading(false);
                })
                .catch(err => {
                    props.setLoading(false);
                    console.error(err);
                });
        }

        else if (searchType === "date") {
            if (startDate > getCurrentDate() || endDate > getCurrentDate()) {
                setResults(null);
                props.setLoading(false);
                return;
            }

            const correctDateFormat = startDate < endDate;
            const startDateFixed = correctDateFormat ? startDate : endDate;
            const endDateFixed = correctDateFormat ? endDate : startDate;

            axios
                .get(`https://api.nasa.gov/planetary/apod?api_key=${props.apiKey}&start_date=${startDateFixed}&end_date=${endDateFixed}&thumbs=true`)
                .then(result => {
                    setResults(correctDateFormat ? result.data : result.data.reverse());
                    props.setLoading(false);
                })
                .catch(err => {
                    props.setLoading(false);
                    console.error(err);
                });
        }
        else {
            props.setLoading(false);
        }
    }

    useEffect(() => {
        search("count");
    }, []);

    return (
        <div className="Posts">
            <Loading loading={props.loading} />
            {
                (props.loading) ? (<></>) : (results) ? (
                    <>
                        <div className="search-options" id="back-to-top-anchor">
                            <CountSlider count={count} changeCount={changeCount} search={search} />
                            <Typography variant="h5" sx={{ margin:"3em" }}>Or</Typography>
                            <DateSelector startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} search={search}/>
                        </div>

                        {
                            results.map(res => (
                                <Post
                                    key={res.title}
                                    type={res.media_type}
                                    thumbnail_url={res.thumbnail_url}
                                    url={res.hdurl || res.url}
                                    title={res.title}
                                    date={res.date}
                                    description={res.explanation} />
                            ))
                        }
                    </>
                ) 
                : 
                (<ErrorPage />)
            }

            <Footer />

            <ScrollToTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
        </div>
    )
}
