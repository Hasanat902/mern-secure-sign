import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <button className="bg-slate-600 text-white p-4 uppercase rounded-lg font-semibold hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Have an account?{" "}
        <Link to="/signin" className="text-blue-700">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
