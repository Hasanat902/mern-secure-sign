import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

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
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : (
              <li className="font-bold text-slate-500 hover:text-gray-700">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
