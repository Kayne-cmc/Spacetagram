import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Menu.css';

//Material-UI
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';

export default function Menu(props) {
    const navigate = useNavigate();

    const [open, setOpen] = useState();

    const menuItems = [
        {title: "Home", icon: <HomeIcon />, route: "/"},
        {title: "Explore", icon: <SearchIcon />, route: "/posts"},
        {title: "Liked", icon: <FavoriteIcon />, route: "/liked"}
    ];

    const externalItems = [
        {title: "Github", icon: <GitHubIcon />, route: "https://github.com/Kayne-cmc/Spacetagram"},
        {title: "About me", icon: <PersonIcon />, route: "https://www.kaynechu.com/"}
    ];

    return (
        <div className="Menu full-width">
            <Box sx={{ width: "100%" }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" onClick={() => setOpen(true)}><MenuIcon /></IconButton>
                        <Link to="/" className="menu-title"><p>S P A C E T A G R A M</p></Link>
                        <IconButton
                            size="large"
                            onClick={() => props.setTheme(!props.theme)}
                        >
                            { props.theme ? <LightModeIcon /> : <NightlightIcon /> }
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 250 }} onClick={() => setOpen(false)}>
                    <List>
                        {
                            menuItems.map(item => (
                                <ListItem button onClick={() => navigate(item.route)} key={item.title}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            ))
                        }
                    </List>
                    <Divider />
                    <List>
                        {
                            externalItems.map(item => (
                                <ListItem button component="a" href={item.route} target="blank" key={item.title}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}
