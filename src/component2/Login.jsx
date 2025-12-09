import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.message) {
        alert("Login successful");
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        alert(data.error || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300">
      <div className="w-full max-w-md backdrop-blur-md bg-white/70 p-10 rounded-3xl shadow-xl border border-orange-200 transition-transform duration-500 hover:scale-[1.02]">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-2 font-serif">Welcome Back</h2>
        <p className="text-center text-sm text-orange-500 mb-6">
          Login to continue to <span className="font-semibold">NutriAi</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-orange-700">Email</label>
            <div className="flex items-center bg-white/90 border border-orange-300 rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-400">
              <FiMail className="text-orange-400 mr-2" />
              <input
                type="email"
                value={email}
                placeholder="example@fooder.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent outline-none text-orange-800 placeholder-orange-300"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-orange-700">Password</label>
            <div className="flex items-center bg-white/90 border border-orange-300 rounded-xl px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-orange-400">
              <FiLock className="text-orange-400 mr-2" />
              <input
                type="password"
                value={password}
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none text-orange-800 placeholder-orange-300"
                required
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between text-sm text-orange-500">
            <a href="#" className="hover:underline">Forgot password?</a>
            <a href="/signup" className="hover:underline">Create account</a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
