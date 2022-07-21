import React from "react";
import LogoutButton from "../LogoutButton";
import {Link} from "react-router-dom";
import User from "../../auth/User";

function MainLayout({children, title}) {
  let registerBtn = false;
  let loginBtn = false;
  let logoutBtn = false;
  if (!User.isLoggedIn()) {
    registerBtn = <Link to="/app/register" className='no-underline mx-2 hover:underline'>Register</Link>;
    loginBtn = <Link to="/app/login" className='no-underline mx-2 hover:underline'>Login</Link>;
  } else {
    logoutBtn = <LogoutButton/>;
  }
  return (
      <div className="container mx-auto h-screen">
        <div className="flex flex-row">
          <div className="basis-3/4">
            <h1>{title}</h1>
          </div>
          <div className="flex basis-1/4 justify-center">
            {registerBtn}
            {loginBtn}
            {logoutBtn}
          </div>
        </div>
        <div className="flex flex-row justify-center ">
          <div className="basis-1/2">
            {children}
          </div>
        </div>
      </div>
  )
}

export default MainLayout