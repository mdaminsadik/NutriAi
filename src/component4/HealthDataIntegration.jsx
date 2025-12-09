

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHeart, FiUser, FiActivity, FiTarget } from "react-icons/fi";

const HealthDataIntegration = () => {
  const navigate = useNavigate();

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("");
  const [bmi, setBmi] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diseases, setDiseases] = useState("");
  const [goal, setGoal] = useState("");

  const calculateBMI = (h, w) => {
    if (h && w) {
      const heightM = h / 100;
      const bmiValue = w / (heightM * heightM);
      setBmi(bmiValue.toFixed(2));
    } else {
      setBmi("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const healthData = {
      weight,
      height,
      age,
      gender,
      activity,
      bmi,
      bloodGroup,
      allergies,
      diseases,
      goal,
    };
    console.log("User Health Data:", healthData);

    alert("Health data submitted! We'll use this to suggest better nutrition plans.");
    // navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 p-6">
      <div className="w-full max-w-3xl bg-white/90 p-10 rounded-3xl shadow-2xl backdrop-blur-md border border-orange-200 animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-orange-600 mb-8 text-center drop-shadow-lg">
          Health Data Integration
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Age */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-semibold text-orange-500">
              <FiUser /> Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Your Age"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-semibold text-orange-500">
              <FiUser /> Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Height */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-semibold text-orange-500">
              <FiActivity /> Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                calculateBMI(e.target.value, weight);
              }}
              placeholder="Height in cm"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Weight */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-semibold text-orange-500">
              <FiActivity /> Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                calculateBMI(height, e.target.value);
              }}
              placeholder="Weight in kg"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* BMI */}
          {bmi && (
            <div className="col-span-2 text-center text-gray-700 font-semibold">
              Calculated BMI: <span className="text-orange-600">{bmi}</span>
            </div>
          )}

          {/* Activity Level */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-semibold text-orange-500">
              <FiActivity /> Activity Level
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Select Activity Level</option>
              <option value="sedentary">Sedentary</option>
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
            </select>
          </div>

          {/* Blood Group */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-semibold text-orange-500">
              <FiHeart /> Blood Group
            </label>
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Existing Diseases */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-semibold text-orange-500">
              <FiHeart /> Existing Diseases
            </label>
            <input
              type="text"
              value={diseases}
              onChange={(e) => setDiseases(e.target.value)}
              placeholder="e.g., Diabetes, Hypertension"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Allergies */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 font-semibold text-orange-500">
              <FiHeart /> Allergies
            </label>
            <input
              type="text"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              placeholder="e.g., Peanut, Gluten"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Health Goal */}
          <div className="flex flex-col col-span-2">
            <label className="flex items-center gap-2 font-semibold text-orange-500">
              <FiTarget /> Health Goal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Select Your Goal</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-2 w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition duration-300 shadow-lg"
          >
            Submit Health Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthDataIntegration;
