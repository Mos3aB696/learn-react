import { useState } from "react";
export default function StateChallangeOne() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currentDate = new Date(2001, 4, count).toDateString();

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  function handlePlusStep() {
    setStep((s) => s + 1);
  }
  function handleMinusStep() {
    setStep((s) => s - 1);
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
        <button className="btn" onClick={handleMinusStep}>
          -
        </button>
        <div>Step: {step} </div>
        <button className="btn" onClick={handlePlusStep}>
          +
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <button className="btn" onClick={handleMinusCount}>
          -
        </button>
        <div> Count: {count} </div>
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
