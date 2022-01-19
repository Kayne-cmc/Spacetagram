import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import './Home.css';

// Components
import Loading from '../../Loading';
import ErrorPage from '../Error/ErrorPage';
import Footer from '../../Footer';

export default function Home(props) {
    const [images, setImages] = useState([]);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        props.setLoading(true);
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${props.apiKey}&count=${10}&thumbs=true`)
            .then(result => {
                console.log(result);
                setImages(result.data.map(image => {
                    return {
                        key: image.title,
                        content: <img src={image.thumbnail_url || image.hdurl || image.url} alt={image.title} className="carousel-image" style={{ width: "400px", height:"500px" }}/>
                    }
                }));
                props.setLoading(false);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(slide + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, [slide]);

    return (
        <div className="Home">
            <Loading loading={props.loading} />
            
            {
                (props.loading) ? (<></>) : (images) ? (
                    <>
                        <div className="title">
                            <p className='introduction'>Explore the beauty of the universe</p>
                        </div>
                        <div className="Carousel">
                            <Carousel
                                slides={images}
                                offsetRadius={2}
                                goToSlide={slide}
                                showNavigation={false}
                                animationConfig={config.gentle}
                            />
                        </div>
                    </>
                ) : (
                    <ErrorPage />
                )
            }

            <Footer />
        </div>
    )
}
