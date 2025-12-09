import { useState } from "react";
import { GiFire } from "react-icons/gi"; // ✅ Correct fire icon
import { FiCheckCircle, FiStar } from "react-icons/fi";

const Gamification = () => {
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState([]);

  // Sample daily diet challenges
  const challenges = [
    { id: 1, task: "🥗 Eat at least 2 servings of vegetables", points: 10 },
    { id: 2, task: "💧 Drink 8 glasses of water", points: 15 },
    { id: 3, task: "🍎 Eat 2 fruits today", points: 10 },
    { id: 4, task: "🚶 Walk 5,000 steps", points: 20 },
    { id: 5, task: "🥛 Drink 1 glass of milk / protein shake", points: 10 },
  ];

  const toggleComplete = (id) => {
    if (!completed.includes(id)) {
      setCompleted([...completed, id]);

      // Increase streak only when all challenges are done
      if (completed.length + 1 === challenges.length) {
        setStreak(streak + 1);
        setCompleted([]); // reset challenges for next day
        alert("🔥 All challenges completed! Streak +1");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-purple-100 to-pink-100 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-purple-600 mb-6 drop-shadow-lg">
        🎮 Gamified Nutrition Zone
      </h1>

      {/* Streak Section */}
      <div className="flex items-center gap-4 bg-white/80 shadow-lg rounded-2xl p-6 mb-6 w-full max-w-2xl justify-between">
        <div className="flex items-center gap-3">
          <GiFire className="text-5xl text-orange-500" /> {/* ✅ Fixed here */}
          <div>
            <h2 className="text-2xl font-bold text-orange-600">Your Streak</h2>
            <p className="text-gray-600">Days in a row: {streak}</p>
          </div>
        </div>
        <div className="text-4xl font-bold text-purple-700">{streak} 🔥</div>
      </div>

      {/* Challenges Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`p-6 rounded-2xl shadow-xl transition-all transform hover:scale-105 cursor-pointer flex flex-col items-center justify-between ${
              completed.includes(challenge.id)
                ? "bg-green-100 border-2 border-green-400"
                : "bg-white/70 hover:bg-purple-100"
            }`}
            onClick={() => toggleComplete(challenge.id)}
          >
            <p className="text-xl font-semibold text-center mb-3">{challenge.task}</p>
            <div className="flex items-center gap-2">
              <FiStar className="text-yellow-500 text-2xl" />
              <span className="text-lg font-bold text-purple-700">
                {challenge.points} pts
              </span>
            </div>
            {completed.includes(challenge.id) ? (
              <FiCheckCircle className="text-green-500 text-4xl mt-3" />
            ) : (
              <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition">
                Mark as Done
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div className="mt-10 bg-white/80 p-6 rounded-2xl shadow-xl w-full max-w-2xl text-center">
        <h3 className="text-xl font-bold text-purple-600 mb-3">Today's Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-5">
          <div
            className="bg-purple-600 h-5 rounded-full transition-all"
            style={{
              width: `${(completed.length / challenges.length) * 100}%`,
            }}
          ></div>
        </div>
        <p className="mt-3 text-gray-700">
          {completed.length} / {challenges.length} Challenges Completed
        </p>
      </div>
    </div>
  );
};

export default Gamification;
