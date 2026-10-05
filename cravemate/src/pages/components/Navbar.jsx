import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 flex justify-between p-4">
      <Link to="/" className="font-bold text-gray-900">Cravemate</Link>
      <div className="flex gap-4">
        <Link to="/login" className="p-2">Sign in</Link>
        <Link to="/signup" className="font-bold text-gray-900 bg-blue-800 p-2 rounded">Get started for free</Link>
      </div>
    </nav>
  );
}