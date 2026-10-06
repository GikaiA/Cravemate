import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold">Login to see your favorites</h1>
      <form className="flex flex-col gap-4 w-lg">
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <button className="bg-blue-500 text-white rounded-md p-2">Login</button>
        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-gray-400"></div>
          <span className="shrink mx-4 text-gray-400">OR</span>
          <div className="grow border-t border-gray-400"></div>
        </div>
        <p className="text-center">Sign in With Google</p>
        <div className="flex justify-center">
          Dont have an account? <a href="/signup" className="text-blue-500 pl-1">  Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
