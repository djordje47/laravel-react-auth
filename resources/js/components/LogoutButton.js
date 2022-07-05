import React from "react";
import {Button, Box} from "@mui/material";
import User from '../auth/User';
import {withRouter} from "react-router-dom";

function LogoutButton({history}) {

  const logout = (e) => {
    e.preventDefault()

    window.axios.post('/api/logout')
    .then(() => {
      //successful response
    })
    .catch(() => {
      //handle if something went wrong
    })
    .then(() => {
      //this code will be definitely executed
      User.logout(afterUserDestroyed)
    })
  }

  const afterUserDestroyed = () => {
    history.push('/app/login')
  }
  if (User.isLoggedIn()) {
    return (
        <React.Fragment>
          <Box component={"form"} onSubmit={logout}>
            <Button
                type={"submit"}
                color={'inherit'}>
              Logout
            </Button>
          </Box>
        </React.Fragment>
    )
  } else {
    return (
        <React.Fragment>
          
        </React.Fragment>
    )
  }

}

export default withRouter(LogoutButton)