import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { supabase, signInWithGoogle } from "../supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setError(error.message);
    navigate("/");
  }

  async function handleGoogle() {
    const { error } = await signInWithGoogle();
    if (error) setError(error.message);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold">Login to see your favorites</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-lg">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Login</button>
        <div className="relative flex py-5 items-center">
          <div className="grow border-t border-gray-400"></div>
          <span className="shrink mx-4 text-gray-400">OR</span>
          <div className="grow border-t border-gray-400"></div>
        </div>
        <button
          type="button"
          onClick={handleGoogle}
          className="flex justify-center items-center gap-2 border-2 border-gray-300 rounded-md p-2 cursor-pointer"
        >
          <FcGoogle size={24} /> Sign in With Google
        </button>
        <div className="flex justify-center">
          Dont have an account? <Link to="/signup" className="text-blue-500 pl-1">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
