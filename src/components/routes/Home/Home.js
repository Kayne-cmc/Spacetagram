import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from '3d-react-carousal';
import { Typography } from '@mui/material';
import './Home.css';

// Components
import Loading from '../../Loading';
import ErrorPage from '../../ErrorPage';

export default function Home(props) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        props.setLoading(true);
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${props.apiKey}&count=${10}&thumbs=true`)
            .then(result => {
                console.log(result);
                setImages(result.data.map(image => {
                    if (image.media_type === "video") {
                        return (<img src={image.thumbnail_url} alt={image.title} className="carousel-image"/>)
                    }
                    else if (image.media_type === "image") {
                        return (<img src={image.hdurl || image.url} alt={image.title} className="carousel-image"/>)
                    }
                    else {
                        return (<></>)
                    }
                }));
                props.setLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className="Home">
            <Loading loading={props.loading} />
            
            {
                (props.loading) ? (<></>) : (images) ? (
                    <>
                        <div className="title">
                            <Typography variant="h1" sx={{ fontFamily: "'Pacifico', cursive"}}>Spacetagram</Typography>
                            <Typography variant="subtitle1">Look into the universe and see what lies ahead</Typography>
                        </div>
                        <div className="Carousel">
                            <Carousel slides={images}/>
                        </div>
                    </>
                ) : (
                    <ErrorPage />
                )
            }
        </div>
    )
}
