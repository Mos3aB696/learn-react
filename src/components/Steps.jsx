import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  /**
   ** Using a callback function with setStep or setIsOpen is often preferred over directly passing the new value
   **   because it ensures that you are working with the most up-to-date state. This is particularly important
   **   when the state update depends on the previous state.
   */

  function handlePrevious() {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((nextStep) => nextStep + 1);
  }

  return (
    <div className="step-section">
      <button
        className="close"
        onClick={() => setIsOpen((visability) => !visability)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button onClick={handlePrevious} condition={step === 1}>
              <span>👈</span> Previous
            </Button>

            <Button onClick={handleNext} condition={step === 3}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      ></div>
    </div>
  );
}

function Button({ onClick, condition, children }) {
  return (
    <button
      style={{
        background: condition ? "#ccc" : "#f0ad1b",
        color: "#373737",
        opacity: condition ? 0.5 : 1,
        cursor: condition ? "not-allowed" : "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
