import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <Link to="/" className="font-bold">Cravemate</Link>
      <div className="flex gap-4">
        <Link to="/login">Sign in</Link>
        <Link to="/signup">Get started for free</Link>
      </div>
    </nav>
  );
}