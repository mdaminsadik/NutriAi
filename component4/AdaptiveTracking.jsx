import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FiHeart, FiActivity, FiCoffee } from "react-icons/fi";

const AdaptiveTracking = () => {
  // Sample daily performance data
  const [data, setData] = useState([
    { day: "Mon", steps: 4500, water: 6, sleep: 7 },
    { day: "Tue", steps: 7000, water: 8, sleep: 6 },
    { day: "Wed", steps: 8000, water: 7, sleep: 8 },
    { day: "Thu", steps: 6500, water: 8, sleep: 7 },
    { day: "Fri", steps: 9000, water: 9, sleep: 8 },
    { day: "Sat", steps: 10000, water: 10, sleep: 8 },
    { day: "Sun", steps: 7500, water: 8, sleep: 7 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-green-100 to-green-200 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-green-600 mb-6 drop-shadow-lg">
        📊 Adaptive Health Tracking
      </h1>

      {/* Daily Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-6xl">
        <div className="bg-white/80 shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <FiActivity className="text-5xl text-green-500 mb-3" />
          <h2 className="text-xl font-bold text-green-700">Steps Today</h2>
          <p className="text-gray-700 text-lg mt-1">{data[data.length - 1].steps} steps</p>
        </div>
        <div className="bg-white/80 shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <FiCoffee className="text-5xl text-green-500 mb-3" />
          <h2 className="text-xl font-bold text-green-700">Water Intake</h2>
          <p className="text-gray-700 text-lg mt-1">{data[data.length - 1].water} glasses</p>
        </div>
        <div className="bg-white/80 shadow-lg rounded-2xl p-6 flex flex-col items-center">
          <FiHeart className="text-5xl text-green-500 mb-3" />
          <h2 className="text-xl font-bold text-green-700">Sleep Hours</h2>
          <p className="text-gray-700 text-lg mt-1">{data[data.length - 1].sleep} hrs</p>
        </div>
      </div>

      {/* Performance Graph */}
      <div className="bg-white/80 shadow-lg rounded-2xl p-6 w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Weekly Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="steps" stroke="#34D399" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="water" stroke="#10B981" />
            <Line type="monotone" dataKey="sleep" stroke="#059669" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Easy Tracking Explanation */}
      <div className="mt-10 bg-white/80 shadow-lg rounded-2xl p-6 w-full max-w-6xl">
        <h3 className="text-xl font-bold text-green-700 mb-3">How to Read Your Stats</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Steps:</strong> Shows your daily physical activity. Aim for 7,000-10,000 steps daily.</li>
          <li><strong>Water:</strong> Shows daily hydration in glasses. Keep yourself hydrated for better metabolism.</li>
          <li><strong>Sleep:</strong> Shows hours of sleep last night. 7-8 hours is ideal for health.</li>
        </ul>
      </div>
    </div>
  );
};

export default AdaptiveTracking;
