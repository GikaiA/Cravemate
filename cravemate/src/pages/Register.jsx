import React from 'react'
import { FcGoogle } from "react-icons/fc";

function Register() {
  return (
    <div className="min-h-screen block justify-center items-center">
      <h1 className="text-2xl font-bold pb-4">Register</h1>
      <form className="flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4">
        <input type="text" placeholder="First Name" className="border-2 border-gray-300 rounded-md p-2" />
        <input type="text" placeholder="Last Name" className="border-2 border-gray-300 rounded-md p-2" />
        </div>
        <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-md p-2" />
        <input type="password" placeholder="Password" className="border-2 border-gray-300 rounded-md p-2" />
        <button className="bg-blue-500 text-white rounded-md p-4 ">Register</button>
        <div className="relative flex py-4 items-center">
          <div className="grow border-t border-gray-400"></div>
          <span className="shrink mx-4 text-gray-400">OR</span>
          <div className="grow border-t border-gray-400 dashed"></div>
        </div>
        <div className="flex justify-center py-2">
          <FcGoogle size={32} />
        </div>
      </form>
      <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
    </div>
  )
}

export default Register