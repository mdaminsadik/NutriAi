
//this is working

// import { useNavigate } from "react-router-dom"; 


// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 p-6">
//       <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-2xl transition transform hover:scale-105 relative z-10">
//         {/* Header */}
//         <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-6">
//           Welcome to NutriAi
//         </h1>
//         <p className="text-center text-gray-700 text-lg mb-10">
//           Your AI-powered personalized nutrition and preventive health advisor.
//           Track your diet, understand your nutrients, and achieve your health goals effortlessly.
//         </p>

//         {/* Features Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//           <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
//             <h3 className="text-xl font-bold text-orange-600 mb-2">Personalized Nutrition</h3>
//             <p className="text-gray-700">Get AI-based insights tailored to your diet and lifestyle.</p>
//           </div>
//           <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
//             <h3 className="text-xl font-bold text-orange-600 mb-2">Diet Tracking</h3>
//             <p className="text-gray-700">Easily log your meals and analyze nutrient intake in real-time.</p>
//           </div>
//           <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
//             <h3 className="text-xl font-bold text-orange-600 mb-2">Preventive Health Tips</h3>
//             <p className="text-gray-700">Receive AI suggestions to avoid deficiencies and maintain optimal health.</p>
//           </div>
//           <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
//             <h3 className="text-xl font-bold text-orange-600 mb-2">Smart Reports</h3>
//             <p className="text-gray-700">Generate quick visual reports on your nutritional status and progress.</p>
//           </div>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col md:flex-row justify-center gap-6">
//           <button
//             onClick={() => navigate("/signup")}
//             className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//           >
//             Get Started
//           </button>
//           <button
//             onClick={() => navigate("/login")}
//             className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-100 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//           >
//             Log In
//           </button>
//         </div>

//         {/* Footer */}
//         <p className="mt-10 text-center text-gray-500 text-sm">
//           NutriAi © 2025. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;




// signup and login button in same page

// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 p-6">
      
//       {/* Main Content */}
//       <div className="flex flex-col justify-center items-center flex-1">
//         <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-2xl transition transform hover:scale-105 text-center">
//           {/* Header */}
//           <h1 className="text-5xl font-extrabold text-orange-600 mb-6">
//             Welcome to NutriAi
//           </h1>
//           <p className="text-gray-700 text-lg mb-10">
//             Your AI-powered personalized nutrition and preventive health advisor.
//           </p>

//           {/* Features Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//             <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-bold text-orange-600 mb-2">Personalized Nutrition</h3>
//               <p className="text-gray-700">AI insights tailored to your diet and lifestyle.</p>
//             </div>
//             <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-bold text-orange-600 mb-2">Diet Tracking</h3>
//               <p className="text-gray-700">Log your meals and analyze nutrient intake.</p>
//             </div>
//             <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-bold text-orange-600 mb-2">Preventive Health Tips</h3>
//               <p className="text-gray-700">Receive AI suggestions for optimal health.</p>
//             </div>
//             <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
//               <h3 className="text-xl font-bold text-orange-600 mb-2">Smart Reports</h3>
//               <p className="text-gray-700">Generate visual reports on your nutritional status.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Buttons: Sign Up | Get Started | Login */}
//       <div className="flex justify-center items-center gap-6 mt-6">
//         <Link
//           to="/signup"
//           className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-100 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//         >
//           Sign Up
//         </Link>
//         <button
//           onClick={() => alert("Get Started clicked!")}
//           className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//         >
//           Get Started
//         </button>
//         <Link
//           to="/login"
//           className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-100 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//         >
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 p-6">

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-2xl transition transform hover:scale-105 text-center">
          
          {/* Header */}
          <h1 className="text-5xl font-extrabold text-orange-600 mb-6">
            Welcome to NutriAi
          </h1>
          <p className="text-gray-700 text-lg mb-10">
            Your AI-powered personalized nutrition and preventive health advisor.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Personalized Nutrition</h3>
              <p className="text-gray-700">AI insights tailored to your diet and lifestyle.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Diet Tracking</h3>
              <p className="text-gray-700">Log your meals and analyze nutrient intake.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Preventive Health Tips</h3>
              <p className="text-gray-700">Receive AI suggestions for optimal health.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Smart Reports</h3>
              <p className="text-gray-700">Generate visual reports on your nutritional status.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button: Only Get Started */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => navigate("/auth")}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg text-xl transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
