import React, { useState }from 'react';
import store from 'store2';
import './Post.css';

//Components
import PostDialog from './PostDialog';

//Material-UI
import { Typography, Card, CardContent, IconButton } from '@mui/material';
import  FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Post(props) {
    const [liked, setLiked] = useState(props.liked || false);
    const [open, setOpen] = useState(false);

    function handleClose() {
        setOpen(false);
    }

    function likePost(post) {
        if (!liked) {
            store.add(post.title, {
                ...post
            });
            setLiked(true);
        }
        else {
            store.remove(post.title);
            setLiked(false);
        }
    }

    return (
        <div className="Post">
            <Card sx={{ width:400, height:400, margin:"1em" }}>
                <CardContent sx={{ width:400, height:400, padding:0 }}>
                    <Typography variant="h6">{props.title}</Typography>
                    <div className="media-container">
                        <div className="media">
                            {/* {(props.type==="image") ? (
                                <input type="image" src={props.url} alt={props.title} onClick={() => setOpen(true)}/>
                            ) : (
                                <iframe src={props.url} title={props.title}></iframe>
                                )
                            } */}
                            <input
                                type="image"
                                src={props.thumbnail_url || props.url}
                                alt={props.title} onClick={() => setOpen(true)}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Typography variant="body1">{props.date}</Typography>
            <IconButton onClick={() => likePost(props)}>
                {
                    liked ? (
                        <FavoriteIcon sx={{ color: "red" }}/>
                    ) : (
                        <FavoriteBorderIcon />
                    )
                }
            </IconButton>
            <PostDialog
                open={open}
                handleClose={handleClose}
                title={props.title}
                url={props.url}
                description={props.description}
                type={props.type}
            />
        </div>
    )
}
