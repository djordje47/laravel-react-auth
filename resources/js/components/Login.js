import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  CssBaseline,
  Typography
} from "@mui/material";
import user from "../auth/User";
import {withRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function Login({history, location}) {

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);

    const loginCredentials = {
      email: formData.get('email'),
      password: formData.get('password')
    }

    function authenticatedCallback() {
      history.replace('/app/dashboard')
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      window.axios.post('/api/login', loginCredentials).then((response) => {
        user.authenticated(response.data, authenticatedCallback);
      })
    });
  }

  return (
      <MainLayout title={"Login"}>
        <Box component={"form"} onSubmit={handleSubmit}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
          />
          <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
          />
          <Button
              fullWidth
              variant={"outlined"}
              type={"submit"}
              sx={{mt: 3, mb: 2}}
          >
            Login
          </Button>
        </Box>
      </MainLayout>
  )
}

export default withRouter(Login)