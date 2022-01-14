import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Icon,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const pages = [
        {name: 'Главная', link: '/'},
        {name: 'Аналитика', link: '/schedules'},
        {name: 'Интересные факты', link: '/posts'}];
    const handleOpenNavMenu = (event: React.ChangeEvent<any>): void => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="static" sx={{mb: 1}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Icon>pets</Icon>
                        <span>Диалоги о котейке</span>
                        <Icon>pets</Icon>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <NavLink to={page.link}><Typography textAlign="center">{page.name}</Typography></NavLink>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <NavLink to='/dogs_definitions'>
                                    <Typography textAlign="center">Почему собаки лучше</Typography>
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Icon>pets</Icon>
                        <span>Диалоги о котейке</span>
                        <Icon>pets</Icon>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink to={page.link} className="navbarLink">{page.name}</NavLink>
                            </Button>
                        ))}
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink to='/dogs_definitions' className="navbarLink">Почему собаки лучше котиков</NavLink>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;