import React from "react";
import {
  AppBar,
  Paper,
  Container,
  Box,
  CssBaseline,
  Toolbar,
  Typography, Button
} from "@mui/material";
import LogoutButton from "../LogoutButton";
import {Link} from "react-router-dom";
import User from "../../auth/User";

function MainLayout({children, title}) {
  let registerBtn = false;
  let loginBtn = false;
  let logoutBtn = false;
  if (!User.isLoggedIn()) {
    registerBtn = <Link to="/app/register" color={'#fff'}>Register</Link>;
    loginBtn = <Link to="/app/login" color={'#fff'}>Login</Link>;
  } else {

  }
  return (
      <React.Fragment>
        <CssBaseline/>
        <AppBar position={"static"}>
          <Toolbar>
            <Typography
                variant={"h6"}
                component={"div"}
                sx={{flexGrow: 1}}>
              {title}
            </Typography>
            {registerBtn}
            {loginBtn}
            <LogoutButton/>
          </Toolbar>
        </AppBar>
        <Container>
          <Box
              sx={{
                marginTop: 6,
                display: 'flex',
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >
            <Paper sx={{
              width: '60%',
              padding: 2
            }}>
              {children}
            </Paper>
          </Box>
        </Container>
      </React.Fragment>
  )
}

export default MainLayout