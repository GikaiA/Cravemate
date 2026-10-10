import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../supabase';

export default function Navbar() {
  const { user, loading } = useAuth();
  const name = user?.user_metadata?.first_name || user?.user_metadata?.full_name || user?.email;

  return (
    <nav className="bg-white border-b border-gray-200 flex justify-between p-4">
      <Link to="/" className="font-bold text-gray-900">Cravemate</Link>
      {!loading && (
        user ? (
          <div className="flex gap-4 items-center">
            <span className="text-gray-900">Hi, {name}</span>
            <button onClick={() => supabase.auth.signOut()} className="p-2 cursor-pointer">Sign out</button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login" className="p-2">Sign in</Link>
            <Link to="/signup" className="font-bold text-gray-900 bg-blue-800 p-2 rounded">Get started for free</Link>
          </div>
        )
      )}
    </nav>
  );
}
