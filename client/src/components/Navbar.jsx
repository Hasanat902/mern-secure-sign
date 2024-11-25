import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-xl font-bold text-black">SecureSign</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="font-bold text-slate-500 hover:text-gray-700">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="font-bold text-slate-500 hover:text-gray-700">
              About
            </li>
          </Link>
          <Link to="/signin">
            <li className="font-bold text-slate-500 hover:text-gray-700">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
