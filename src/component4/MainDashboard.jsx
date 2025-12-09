


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCamera, FiActivity, FiAward, FiUsers, FiTrendingUp, FiCoffee } from "react-icons/fi";
import NutriBot from "./NutriBot";   // ✅ Import NutriBot

const features = [
  { title: "Food Image Scanner", description: "Upload food images and get instant nutritional analysis.", icon: <FiCamera className="text-6xl text-orange-500" /> },
  { title: "Health Data Integration", description: "Connect health apps and track all your metrics in one place.", icon: <FiActivity className="text-6xl text-orange-500" /> },
  { title: "Gamified Environment", description: "Earn points, badges, and rewards for healthy habits.", icon: <FiAward className="text-6xl text-orange-500" /> },
  { title: "Health-Conscious Community", description: "Share tips, challenges, and recipes with like-minded users.", icon: <FiUsers className="text-6xl text-orange-500" /> },
  { title: "Adaptive Health Tracking", description: "Receive AI-powered insights that adapt to your habits.", icon: <FiTrendingUp className="text-6xl text-orange-500" /> },
  { title: "Personalized Meal Plans", description: "Get meal plans tailored to your goals and preferences.", icon: <FiCoffee className="text-6xl text-orange-500" /> },
];

const MainDashboard = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 via-orange-100 to-orange-200 flex flex-col items-center p-6 relative overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-7xl mb-6 z-10 relative">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 tracking-wide">NutriAi</h1>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-orange-300 flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:scale-110 transition-transform">A</div>
        </div>
      </div>

      {/* Top Slider */}
      <div className="relative w-full max-w-7xl h-[450px] flex items-center justify-center z-10 mx-4 -mt-1">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`absolute w-full p-12 rounded-3xl shadow-2xl flex flex-col items-center justify-center transition-all duration-700 transform bg-white/30 backdrop-blur-md border border-white/20
              ${index === current
                ? "opacity-100 z-20 scale-100 translate-x-0"
                : index < current
                ? "opacity-0 z-0 scale-90 -translate-x-32 rotate-y-12"
                : "opacity-0 z-0 scale-90 translate-x-32 rotate-y--12"
              }`}
          >
            {feature.icon}
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 mt-4 text-center">{feature.title}</h2>
            <p className="text-gray-700 mt-3 text-center text-lg">{feature.description}</p>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + features.length) % features.length)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-200/70 p-5 rounded-full hover:bg-orange-300 transition z-30 text-3xl font-bold shadow-lg"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % features.length)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-200/70 p-5 rounded-full hover:bg-orange-300 transition z-30 text-3xl font-bold shadow-lg"
        >
          &#8594;
        </button>
      </div>

      {/* Slider Dots */}
      <div className="flex gap-4 mt-4 z-10">
        {features.map((_, idx) => (
          <div
            key={idx}
            className={`w-5 h-5 rounded-full ${idx === current ? "bg-orange-500" : "bg-orange-200"} cursor-pointer transition`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-6 max-w-7xl w-full px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition duration-500 hover:bg-gradient-to-r from-orange-100 via-orange-50 to-white cursor-pointer"
            onClick={() => {
              switch (feature.title) {
                case "Health Data Integration":
                  navigate("/health-integration");
                  break;
                case "Food Image Scanner":
                  navigate("/food-scanner");
                  break;
                case "Gamified Environment":
                  navigate("/gamification");
                  break;
                case "Health-Conscious Community":
                  navigate("/community");
                  break;
                case "Adaptive Health Tracking":
                  navigate("/tracking");
                  break;
                case "Personalized Meal Plans":
                  navigate("/meal-plans");
                  break;
                default:
                  break;
              }
            }}
          >
            {feature.icon}
            <h3 className="text-2xl font-bold text-orange-500 mt-4">{feature.title}</h3>
            <p className="text-gray-700 mt-2 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Floating NutriBot */}
      <NutriBot />   {/* ✅ Integrated here */}
      
      {/* Optional abstract background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/40 rounded-full filter blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/30 rounded-full filter blur-3xl animate-pulse-slow -z-10"></div>
    </div>
  );
};

export default MainDashboard;
