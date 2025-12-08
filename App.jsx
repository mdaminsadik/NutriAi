

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componentt/signup/Home";
import Auth from "./component3/Auth";
import Login from "./component2/Login";
import Signup from "./component3/Signup";
import MainDashboard from "./component4/MainDashboard";
import HealthDataIntegration from "./component4/HealthDataIntegration";
import Gamification from "./component4/Gamification";
import HealthCommunity from "./component4/Healthcommunity";
import AdaptiveTracking from "./component4/AdaptiveTracking";
// import MealPlan from "./component4/MealPlan";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Auth page after clicking Get Started */}
        <Route path="/auth" element={<Auth />} />

        {/* Login & Signup routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Dashboard after login */}
       
        <Route path="/dashboard" element={<MainDashboard />} />
 <Route path="/health-integration" element={<HealthDataIntegration />} />
   <Route path="/gamification" element={<Gamification />} />
<Route path="/community" element={<HealthCommunity />} />
 <Route path="/tracking" element={<AdaptiveTracking />} />
  {/* <Route path="/meal-plans" element={<MealPlan />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

