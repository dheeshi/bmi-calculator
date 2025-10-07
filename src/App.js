import React, { useState } from "react";
import "./App.css";

function BmiCalculator() {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBmi = () => {
    if (heightValue && weightValue) {
      const heightInMeters = heightValue / 100;
      const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiValue(bmi);

      let message = "";
      if (bmi < 18.5) message = "You are Underweight 😕";
      else if (bmi < 25) message = "You are Normal weight 😊";
      else if (bmi < 30) message = "You are Overweight 😬";
      else message = "You are Obese 😟";
      setBmiMessage(message);
    } else {
      setBmiValue("");
      setBmiMessage("Please enter valid height and weight.");
    }
  };

  const reset = () => {
    setHeightValue("");
    setWeightValue("");
    setBmiValue("");
    setBmiMessage("");
  };

  return (
    <div className="app-container">
      <div className="bmi-card">
        <h1 className="title">BMI Calculator</h1>

        <div className="input-section">
          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter height in cm"
            value={heightValue}
            onChange={(e) => setHeightValue(e.target.value)}
          />
        </div>

        <div className="input-section">
          <label>Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter weight in kg"
            value={weightValue}
            onChange={(e) => setWeightValue(e.target.value)}
          />
        </div>

        <button className="calculate-btn" onClick={calculateBmi}>
          Calculate BMI
        </button>

        {bmiValue && (
          <div className="result-card">
            <p className="bmi-value">{bmiValue}</p>
            <p className="bmi-message">{bmiMessage}</p>
            <button className="reset-btn" onClick={reset}>
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BmiCalculator;
