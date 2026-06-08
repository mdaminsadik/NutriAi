// import { useState } from "react";

// const mealDatabase = {
//   "weight loss": {
//     veg: {
//       breakfast: "Oats with fruits + green tea",
//       lunch: "Mixed vegetable salad + dal",
//       dinner: "Grilled paneer + steamed veggies",
//     },
//     "non-veg": {
//       breakfast: "Boiled eggs + brown toast",
//       lunch: "Grilled chicken salad",
//       dinner: "Fish curry + vegetables",
//     },
//   },
//   "weight gain": {
//     veg: {
//       breakfast: "Paneer paratha + curd",
//       lunch: "Rice + dal + vegetables",
//       dinner: "Paneer curry + roti",
//     },
//     "non-veg": {
//       breakfast: "Egg omelette + toast",
//       lunch: "Chicken rice bowl",
//       dinner: "Chicken curry + rice",
//     },
//   },
//   maintain: {
//     veg: {
//       breakfast: "Poha + fruits",
//       lunch: "Roti + sabzi + dal",
//       dinner: "Light vegetable curry",
//     },
//     "non-veg": {
//       breakfast: "Egg sandwich",
//       lunch: "Grilled chicken + roti",
//       dinner: "Fish + vegetables",
//     },
//   },
// };

// const PersonalizedMealPlan = () => {
//   const [goal, setGoal] = useState("");
//   const [diet, setDiet] = useState("");
//   const [plan, setPlan] = useState(null);

//   const generatePlan = () => {
//     if (!goal || !diet) return;
//     setPlan(mealDatabase[goal][diet]);
//   };

//   return (
//     <div className="bg-white p-8 rounded-3xl shadow-xl max-w-xl mx-auto">
//       <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
//         Personalized Meal Plan
//       </h2>

//       {/* Inputs */}
//       <div className="space-y-4">
//         <select
//           className="w-full p-3 rounded-xl border"
//           onChange={(e) => setGoal(e.target.value)}
//         >
//           <option value="">Select Goal</option>
//           <option value="weight loss">Weight Loss</option>
//           <option value="weight gain">Weight Gain</option>
//           <option value="maintain">Maintain Weight</option>
//         </select>

//         <select
//           className="w-full p-3 rounded-xl border"
//           onChange={(e) => setDiet(e.target.value)}
//         >
//           <option value="">Select Diet</option>
//           <option value="veg">Vegetarian</option>
//           <option value="non-veg">Non-Vegetarian</option>
//         </select>

//         <button
//           onClick={generatePlan}
//           className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
//         >
//           Generate Meal Plan
//         </button>
//       </div>

//       {/* Output */}
//       {plan && (
//         <div className="mt-6 space-y-3">
//           <p><strong>🥣 Breakfast:</strong> {plan.breakfast}</p>
//           <p><strong>🍱 Lunch:</strong> {plan.lunch}</p>
//           <p><strong>🍽 Dinner:</strong> {plan.dinner}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PersonalizedMealPlan;

import React, { useState } from "react";

const mealDatabase = {
  "weight loss": {
    veg: {
      breakfast: ["Oats with fruits", "Poha", "Smoothie bowl"],
      midMorning: ["Apple + almonds", "Papaya", "Coconut water"],
      lunch: ["Veg salad + dal", "Roti + sabzi", "Khichdi"],
      evening: ["Green tea + chana", "Sprouts", "Fruit chaat"],
      dinner: ["Grilled paneer + veggies", "Soup + salad", "Stir-fry veg"],
    },
    "non-veg": {
      breakfast: ["Boiled eggs + toast", "Omelette", "Egg sandwich"],
      midMorning: ["Fruit bowl", "Banana", "Juice"],
      lunch: ["Grilled chicken salad", "Chicken roti", "Fish curry"],
      evening: ["Buttermilk", "Soup", "Nuts"],
      dinner: ["Fish + veggies", "Chicken stir fry", "Egg curry"],
    },
  },
  "weight gain": {
    veg: {
      breakfast: ["Paneer paratha", "Banana shake", "Upma"],
      midMorning: ["Milk + nuts", "Dates", "Peanut chikki"],
      lunch: ["Rice + dal + sabzi", "Veg pulao", "Curd rice"],
      evening: ["PB sandwich", "Smoothie", "Boiled corn"],
      dinner: ["Paneer curry + roti", "Veg curry", "Dal makhani"],
    },
    "non-veg": {
      breakfast: ["Omelette + toast", "Egg bhurji", "Chicken sandwich"],
      midMorning: ["Dry fruits", "Milk", "Protein bar"],
      lunch: ["Chicken rice", "Biryani (light)", "Fish curry"],
      evening: ["Boiled eggs", "Soup", "Peanuts"],
      dinner: ["Chicken curry + rice", "Fish fry", "Egg curry"],
    },
  },
  maintain: {
    veg: {
      breakfast: ["Poha", "Idli", "Toast + fruits"],
      midMorning: ["Fruit", "Juice", "Coconut water"],
      lunch: ["Roti + dal + sabzi", "Rice bowl", "Curd meal"],
      evening: ["Tea + nuts", "Soup", "Snacks"],
      dinner: ["Light veg curry", "Salad", "Soup"],
    },
    "non-veg": {
      breakfast: ["Egg sandwich", "Omelette", "Toast"],
      midMorning: ["Fruit juice", "Apple", "Banana"],
      lunch: ["Grilled chicken + roti", "Fish curry", "Chicken bowl"],
      evening: ["Soup", "Tea", "Boiled eggs"],
      dinner: ["Fish + veggies", "Chicken curry", "Egg curry"],
    },
  },
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const PersonalizedMealPlan = () => {
  const [goal, setGoal] = useState("");
  const [diet, setDiet] = useState("");
  const [mode, setMode] = useState("daily");
  const [plan, setPlan] = useState(null);

  const generatePlan = () => {
    if (!goal || !diet) return;

    const base = mealDatabase[goal][diet];

    if (mode === "daily") {
      setPlan({
        breakfast: base.breakfast[0],
        midMorning: base.midMorning[0],
        lunch: base.lunch[0],
        evening: base.evening[0],
        dinner: base.dinner[0],
      });
    } else {
      const weekly = days.map((day, i) => ({
        day,
        breakfast: base.breakfast[i % base.breakfast.length],
        midMorning: base.midMorning[i % base.midMorning.length],
        lunch: base.lunch[i % base.lunch.length],
        evening: base.evening[i % base.evening.length],
        dinner: base.dinner[i % base.dinner.length],
      }));
      setPlan(weekly);
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-100 to-white p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold text-orange-600 mb-6 text-center">
        🥗 Personalized Diet Planner
      </h2>

      {/* Mode Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setMode("daily")}
          className={`px-6 py-2 rounded-xl font-bold ${
            mode === "daily" ? "bg-orange-500 text-white" : "bg-white"
          }`}
        >
          Daily Plan
        </button>
        <button
          onClick={() => setMode("weekly")}
          className={`px-6 py-2 rounded-xl font-bold ${
            mode === "weekly" ? "bg-orange-500 text-white" : "bg-white"
          }`}
        >
          Weekly Plan
        </button>
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <select className="p-4 rounded-xl border" onChange={(e) => setGoal(e.target.value)}>
          <option value="">🎯 Select Goal</option>
          <option value="weight loss">Weight Loss</option>
          <option value="weight gain">Weight Gain</option>
          <option value="maintain">Maintain Weight</option>
        </select>

        <select className="p-4 rounded-xl border" onChange={(e) => setDiet(e.target.value)}>
          <option value="">🥗 Select Diet</option>
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
        </select>
      </div>

      <button
        onClick={generatePlan}
        className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg"
      >
        Generate {mode === "daily" ? "Daily" : "Weekly"} Plan
      </button>

      {/* OUTPUT */}
      {plan && mode === "daily" && (
        <div className="mt-8 space-y-3">
          {Object.entries(plan).map(([k, v]) => (
            <MealCard key={k} title={k} value={v} />
          ))}
        </div>
      )}

      {plan && mode === "weekly" && (
        <div className="mt-8 space-y-6">
          {plan.map((dayPlan) => (
            <div key={dayPlan.day} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-bold text-orange-600 mb-2">{dayPlan.day}</h3>
              <p>🥣 {dayPlan.breakfast}</p>
              <p>🍏 {dayPlan.midMorning}</p>
              <p>🍱 {dayPlan.lunch}</p>
              <p>☕ {dayPlan.evening}</p>
              <p>🍽 {dayPlan.dinner}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const MealCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-xl shadow flex justify-between">
    <span className="capitalize font-semibold">{title}</span>
    <span>{value}</span>
  </div>
);

export default PersonalizedMealPlan;
