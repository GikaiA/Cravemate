import React from 'react'

function Register() {
  return (
    <div className="min-h-screen block justify-center items-center">
      <h1>Register</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="First Name" className="border-2 border-gray-300 rounded-md p-2" />
        <input type="text" placeholder="Last Name" className="border-2 border-gray-300 rounded-md p-2" />
        <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-md p-2" />
        <input type="password" placeholder="Password" className="border-2 border-gray-300 rounded-md p-2" />
        <button className="bg-blue-500 text-white rounded-md p-2">Register</button>\
      </form>
      <p>Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
    </div>
  )
}

export default Register