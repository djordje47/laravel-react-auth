import React from "react";
import {Box, Button, Container, CssBaseline, TextField, Typography} from "@mui/material";
import MainLayout from "./layouts/MainLayout";

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);

    const registerData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation')
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      window.axios.post('/api/register', registerData).then((response) => {
        console.log(response);
      })
    });
  }
  return (
      <MainLayout title={"Register"}>
        <CssBaseline/>
        <Box component={"form"} onSubmit={handleSubmit}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
          />
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
          <TextField
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="Confirm password"
              type="password"
              id="password_confirmation"
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