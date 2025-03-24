import { useState } from "react";

export default function StateChallangeTwo() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currentDate = new Date(2001, 4, count).toDateString();

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  function handlePlusCount() {
    setCount((c) => c + step);
  }
  function handleMinusCount() {
    setCount((c) => c - step);
  }
  return (
    <div className="challange-container">
      <div style={{ display: "flex" }}>
        <input
          type="range"
          step={1}
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />{" "}
        <span>{step}</span>
      </div>
      <div style={{ display: "flex" }}>
        <button className="btn" onClick={handleMinusCount}>
          -
        </button>
        <input
          className="input"
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button className="btn" onClick={handlePlusCount}>
          +
        </button>
      </div>
      <div>
        {count} days from today is {currentDate}
      </div>
      <button className="btn" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}
