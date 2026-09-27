import React from "react";

function Login() {
  return (
    <div classname="min-h-screen flex justify-center items-center">
      <h1>Login to see your favorites</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button className="bg-blue-500 text-white rounded-md p-2">Login</button>
        <div class="relative flex py-5 items-center">
          <div class="grow border-t border-gray-400"></div>
          <span class="shrink mx-4 text-gray-400">OR</span>
          <div class="grow border-t border-gray-400"></div>
          <br></br>
          <p> Sign in With Google </p>
        </div>
        <div class="flex justify-center">
          Dont have an account? <a href="/signup" class="text-blue-500"> Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
