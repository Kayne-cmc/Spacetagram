import React from 'react';

//Material-UI
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './PostDialog.css';

export default function PostDialog(props) {
    return (
        <div className="PostDialog">
            <Dialog onClose={props.handleClose} open={props.open}>
                <DialogContent dividers>
                    <DialogTitle>
                    <IconButton
                        onClick={props.handleClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8
                        }}
                    >   
                        <CloseIcon />
                    </IconButton>
                        </DialogTitle>
                    <div className="dialog-content">
                        {(props.type==="image") ? (
                            <img src={props.url} alt={props.title} />
                        ) : (
                            <iframe src={props.url} title={props.title}></iframe>
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
