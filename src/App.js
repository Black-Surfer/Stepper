import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const messages = ["Greet Sesi", "Hail Dominic", "Wave Giwa"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setButtonState] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function toggleModal() {
    //true
    setButtonState(!isOpen); //false
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
      setStep(step + 1);
    }
  }

  return (
    <>
      <button onClick={() => setButtonState(!isOpen)} className="close">
        &times;
      </button>

      {!isOpen ? (
        ""
      ) : (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <center>
            <p>
              Step {step}: {messages[step - 1]}
            </p>
          </center>
          <div className="buttons">
            <button onClick={handlePrevious}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
