import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 p-6">
      <div className="w-full max-w-2xl bg-white p-12 rounded-3xl shadow-2xl text-center">
        <h2 className="text-4xl font-extrabold text-orange-600 mb-8">
          Welcome to NutriAi
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          Choose your option to continue:
        </p>

        <div className="flex justify-center gap-8">
          <Link
            to="/signup"
            className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-100 font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition duration-300"
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
