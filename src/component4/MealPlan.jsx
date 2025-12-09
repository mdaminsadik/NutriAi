// // MealPlan.jsx
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const MealPlan = ({ userData }) => {
//   const navigate = useNavigate();
//   const [mealPlan, setMealPlan] = useState([]);

//   useEffect(() => {
//     if (!userData) {
//       navigate("/signup"); // redirect if userData not available
//       return;
//     }

//     // Simple meal plan based on goal
//     const plan =
//       userData.goal === "Weight Loss"
//         ? [
//             { meal: "Breakfast", items: ["Oatmeal with berries", "Green Tea"] },
//             { meal: "Lunch", items: ["Grilled chicken salad", "Quinoa"] },
//             { meal: "Snack", items: ["Almonds", "Apple"] },
//             { meal: "Dinner", items: ["Steamed fish", "Vegetables"] },
//           ]
//         : userData.goal === "Muscle Gain"
//         ? [
//             { meal: "Breakfast", items: ["Egg white omelette", "Whole wheat toast", "Banana"] },
//             { meal: "Lunch", items: ["Grilled chicken", "Brown rice", "Broccoli"] },
//             { meal: "Snack", items: ["Greek yogurt", "Peanut butter"] },
//             { meal: "Dinner", items: ["Salmon", "Sweet potato", "Spinach salad"] },
//           ]
//         : [
//             { meal: "Breakfast", items: ["Smoothie bowl", "Herbal tea"] },
//             { meal: "Lunch", items: ["Veggie wrap", "Quinoa salad"] },
//             { meal: "Snack", items: ["Mixed nuts"] },
//             { meal: "Dinner", items: ["Grilled tofu", "Steamed veggies"] },
//           ];

//     setMealPlan(plan);
//   }, [userData, navigate]);

//   return (
//     <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ textAlign: "center", color: "#FF6600" }}>
//         {userData ? `${userData.name}'s Meal Plan` : "Personalized Meal Plan"}
//       </h1>

//       {userData && (
//         <div style={{ margin: "20px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
//           <p><strong>Goal:</strong> {userData.goal}</p>
//           <p>
//             <strong>Age:</strong> {userData.age} | <strong>Gender:</strong> {userData.gender} |{" "}
//             <strong>Height:</strong> {userData.height}cm | <strong>Weight:</strong> {userData.weight}kg
//           </p>
//         </div>
//       )}

//       <div>
//         {mealPlan.map((meal, idx) => (
//           <div key={idx} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
//             <h3 style={{ color: "#FF6600" }}>{meal.meal}</h3>
//             <ul>
//               {meal.items.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#FF6600",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//           onClick={() => navigate("/dashboard")}
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MealPlan;
