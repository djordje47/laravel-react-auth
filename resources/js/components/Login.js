import React from "react";
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
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-col basis-full">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" className='required:border-red-500'/>
            </div>
            <div className="flex flex-col basis-full">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className='required:border-red-500'/>
            </div>
            <div className="flex flex-col basis-full">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">Login
              </button>
            </div>
          </div>
        </form>
      </MainLayout>
  )
}

export default withRouter(Login)