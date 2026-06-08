
// FoodScanner.jsx
import { useRef, useState } from "react";

const FoodScanner = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [foodName, setFoodName] = useState("");
  const [nutrition, setNutrition] = useState(null);

  // Start camera
  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  // Capture photo
  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 400, 300);
    const dataUrl = canvasRef.current.toDataURL("image/png");
    setPhoto(dataUrl);

    // For now simulate recognition
    recognizeFood(dataUrl);
  };

  // Simulated recognition + nutrition lookup
  const recognizeFood = async (imgData) => {
    // TODO: Replace with actual ML model or API
    // Example: Using TensorFlow.js pretrained model or custom backend API
    const simulatedFood = "Apple"; // Example
    setFoodName(simulatedFood);

    // Simulated nutrition dataset
    const nutritionDataset = {
      Apple: { calories: 95, protein: 0.5, carbs: 25, fat: 0.3, suggestion: "Good for snacking" },
      Banana: { calories: 105, protein: 1.3, carbs: 27, fat: 0.3, suggestion: "Great for energy" },
      Pizza: { calories: 285, protein: 12, carbs: 36, fat: 10, suggestion: "Eat occasionally" },
    };

    setNutrition(nutritionDataset[simulatedFood]);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#FF6600" }}>Food Image Scanner</h1>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <video ref={videoRef} width="400" height="300" style={{ border: "2px solid #ccc", borderRadius: "8px" }} />
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={startCamera}
            style={{ padding: "10px 20px", marginRight: "10px", backgroundColor: "#FF6600", color: "white", border: "none", borderRadius: "5px" }}
          >
            Turn on Camera
          </button>
          <button
            onClick={capturePhoto}
            style={{ padding: "10px 20px", backgroundColor: "#FF6600", color: "white", border: "none", borderRadius: "5px" }}
          >
            Scan Food
          </button>
        </div>
      </div>

      <canvas ref={canvasRef} width="400" height="300" style={{ display: "none" }} />

      {photo && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2>Captured Image:</h2>
          <img src={photo} alt="Captured" width="300" style={{ borderRadius: "8px", border: "1px solid #ccc" }} />
        </div>
      )}

      {foodName && nutrition && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
          <h2 style={{ color: "#FF6600" }}>Food: {foodName}</h2>
          <p>Calories: {nutrition.calories} kcal</p>
          <p>Protein: {nutrition.protein} g</p>
          <p>Carbs: {nutrition.carbs} g</p>
          <p>Fat: {nutrition.fat} g</p>
          <p>Suggestion: {nutrition.suggestion}</p>
        </div>
      )}
    </div>
  );
};

export default FoodScanner;
