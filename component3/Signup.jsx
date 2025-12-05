import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(""); // in cm
  const [weight, setWeight] = useState(""); // in kg
  const [bmi, setBmi] = useState("");
  const [activity, setActivity] = useState("");
  const [goal, setGoal] = useState("");
  const [diet, setDiet] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Calculate BMI whenever height or weight changes
  const calculateBMI = (h, w) => {
    if (h && w) {
      const heightM = h / 100;
      const bmiValue = w / (heightM * heightM);
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
      age,
      gender,
      height,
      weight,
      bmi,
      activity,
      goal,
      diet,
    };

   try {
  const res = await fetch("http://127.0.0.1:5000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (res.ok) {
    alert("Signup successful");
    navigate("/login");
  } else {
    alert(data.error || "Signup failed: " + res.status);
  }
} catch (error) {
  console.error("Network/Server error:", error);
  alert("Network error: " + error.message);
}

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl transition transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-8">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm text-orange-500 hover:text-orange-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Age */}
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Gender */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* Height & Weight */}
          <div className="flex gap-4">
            <input
              type="number"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                calculateBMI(e.target.value, weight);
              }}
              placeholder="Height (cm)"
              className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="number"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                calculateBMI(height, e.target.value);
              }}
              placeholder="Weight (kg)"
              className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {bmi && <p className="text-center text-gray-600">BMI: {bmi}</p>}

          {/* Daily Activity */}
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Daily Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="active">Active</option>
          </select>

          {/* Goal */}
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Your Goal</option>
            <option value="maintain">Maintain Weight</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="weight_gain">Weight Gain</option>
          </select>

          {/* Dietary Preference */}
          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Dietary Preference</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-lg shadow-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
