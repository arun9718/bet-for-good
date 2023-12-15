import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
//import '../css/Header.css';



const Header = () => {
    return (

        <AppBar position="static" sx= {{ backgroundColor:'burlywood'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    BET FOR GOOD
                </Typography>
                <TextField 
                    variant="outlined"
                    size="small"
                    placeholder="Search"
                    sx={{ marginRight: '16px',background:'white', borderRadius: '5px' }}
                />
                <Button color="inherit">Login</Button>
                <Button color="inherit">Sign Up</Button>
            </Toolbar>
        </AppBar>
    );
};


export default Header;