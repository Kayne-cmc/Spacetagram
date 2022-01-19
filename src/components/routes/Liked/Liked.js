import React, { useState } from 'react';
import { Typography } from '@mui/material';
import store from 'store2';
import './Liked.css';

// Components
import Post from '../Posts/Post';
import ScrollToTop from '../Posts/ScrollToTop';

import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Liked(props) {
    const [likedPosts] = useState(store());

    return (
        <div className="Liked">
            <div id="back-to-top-anchor"></div>
            {
                (likedPosts) ? (
                    Object.keys(likedPosts).map(key => (
                        <Post
                            key={likedPosts[key].title}
                            type={likedPosts[key].type}
                            thumbnail_url={likedPosts[key].thumbnail_url}
                            url={likedPosts[key].url}
                            title={likedPosts[key].title}
                            date={likedPosts[key].date}
                            description={likedPosts[key].description}
                            liked={true}
                        />
                    ))
                ) : (
                    <>
                        <Typography variant="h2">No liked posts yet!</Typography>
                    </>
                )
            }

            <ScrollToTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollToTop>
        </div>
    )
}
