import React from 'react';

//Material-UI
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import  FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './PostDialog.css';

export default function PostDialog(props) {
    return (
        <div className="PostDialog">
            <Dialog onClose={props.handleClose} open={props.open} maxWidth="md"> 
                <DialogContent dividers>
                    <DialogTitle>
                        <IconButton
                            onClick={() => {
                                const post = {
                                    date: props.date,
                                    description: props.description,
                                    title: props.title,
                                    url: props.url,
                                    type: props.type
                                };
                                props.likePost(post);
                            }}
                            sx={{
                                position: "absolute",
                                left: 16,
                                top: 8
                            }}
                        >
                            {
                                props.liked ? (
                                    <FavoriteIcon sx={{ color: "red" }}/>
                                ) : (
                                    <FavoriteBorderIcon />
                                )
                            }
                        </IconButton>
                        <IconButton
                            onClick={props.handleClose}
                            sx={{
                                position: "absolute",
                                right: 16,
                                top: 8
                            }}
                        >   
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    
                    <div className="dialog-content">
                        {(props.type==="image") ? (
                            <img src={props.url} alt={props.title} className="dialog-media" />
                        ) : (
                            <iframe src={props.url} title={props.title} className="dialog-media"></iframe>
                            )
                        }
                        <Typography>
                            {props.description}
                        </Typography>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
