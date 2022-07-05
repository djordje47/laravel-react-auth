import React from "react";
import User from '../auth/User';
import {Container, Grid, Paper, Typography} from "@mui/material";
import MainLayout from "./layouts/MainLayout";

function Dashboard() {
  return (
      <MainLayout title={"Dashboard"}>
        <Grid container justifyContent={"center"}>
          <Grid item md={12}>
            <Typography variant={"h5"}>
              Hello {User.name}, you're logged in!
            </Typography>
          </Grid>
        </Grid>
      </MainLayout>
  )
}

export default Dashboard