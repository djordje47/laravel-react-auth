import React from "react";
import User from '../auth/User';
import {Container, Grid, Paper, Typography} from "@mui/material";
import MainLayout from "./layouts/MainLayout";

function Dashboard() {
  return (
      <MainLayout title={"Dashboard"}>
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-col basis-full">
            Hello {User.name}, you're logged in!
          </div>
        </div>
      </MainLayout>
  )
}

export default Dashboard