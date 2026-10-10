import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { supabase, signInWithGoogle } from '../supabase';

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setMessage('')
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { first_name: firstName, last_name: lastName } },
    })
    if (error) return setError(error.message)
    // With email confirmation on, signUp returns no session until the link is clicked
    if (data.session) navigate('/')
    else setMessage('Check your email to confirm your account.')
  }

  async function handleGoogle() {
    const { error } = await signInWithGoogle()
    if (error) setError(error.message)
  }

  return (
    <div className="min-h-screen block justify-center items-center">
      <h1 className="text-2xl font-bold pb-4">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4">
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="border-2 border-gray-300 rounded-md p-2" />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="border-2 border-gray-300 rounded-md p-2" />
        </div>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border-2 border-gray-300 rounded-md p-2" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} className="border-2 border-gray-300 rounded-md p-2" />
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-600">{message}</p>}
        <button type="submit" className="bg-blue-500 text-white rounded-md p-4 cursor-pointer">Register</button>
        <div className="relative flex py-4 items-center">
          <div className="grow border-t border-gray-400"></div>
          <span className="shrink mx-4 text-gray-400">OR</span>
          <div className="grow border-t border-gray-400 dashed"></div>
        </div>
        <div className="flex justify-center py-2">
          <button type="button" onClick={handleGoogle} aria-label="Sign up with Google" className="cursor-pointer">
            <FcGoogle size={32} />
          </button>
        </div>
      </form>
      <p>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
    </div>
  )
}

export default Register
