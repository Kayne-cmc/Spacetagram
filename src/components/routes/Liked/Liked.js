import React, { useState } from 'react';
import { Typography } from '@mui/material';
import store from 'store2';

// Components
import Post from '../Posts/Post';

export default function Liked(props) {
    const [likedPosts] = useState(store());

    return (
        <div className="Liked">
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
        </div>
    )
}
