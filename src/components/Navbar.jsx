import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold my-6">
        GUARDIANS
      </Link>
      <Link to="/onboarding" className="btn btn-neutral btn-sm">
        Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
