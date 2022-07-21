import React from "react";
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
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-col basis-full">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className='required:border-red-500'/>
            </div>
            <div className="flex flex-col basis-full">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" className='required:border-red-500'/>
            </div>
            <div className="flex flex-col basis-full">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className='required:border-red-500'/>
            </div>
            <div className="flex flex-col basis-full">
              <label htmlFor="password-confirmation">Confirm password</label>
              <input type="password" id="password-confirmation" name="password-confirmation"
                     className='required:border-red-500'/>
            </div>
            <div className="flex flex-col basis-full">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded">
                Register
              </button>
            </div>
          </div>
        </form>
      </MainLayout>
  )
}