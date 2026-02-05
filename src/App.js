import { useState } from "react";
import "./App.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleCountIncrease() {
    setCount((c) => c + step);
  }

  function handleCountDecrease() {
    setCount((c) => c - step);
  }

  return (
    <div className="App">
      <p>Date counter</p>

      <div>
        <div>
          <input
            type="range"
            min="1"
            max="100"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <output>{step}</output>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handleCountDecrease}>-</button>

          <input
            type="number"
            name="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          <button onClick={handleCountIncrease}>+</button>
        </div>

        <Message count={count} />

        {(count || step > 1) && <Reset setCount={setCount} setStep={setStep} />}
      </div>
    </div>
  );
}

function Message({ count }) {
  function setDate(days) {
    const today = new Date();
    today.setDate(today.getDate() + days);

    const formattedDate = today.toLocaleDateString("en-GB", {
      weekday: "short",
      year: "numeric",
      day: "numeric",
      month: "short",
    });

    return formattedDate;
  }

  return count > 0 ? (
    <p>
      {count} days from today is {setDate(count)}
    </p>
  ) : count < 0 ? (
    <p>
      {Math.abs(count)} days ago was {setDate(count)}
    </p>
  ) : (
    <p>Today is {setDate(count)}</p>
  );
}

function Reset({ setCount, setStep }) {
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return <button onClick={handleReset}>Reset</button>;
}
