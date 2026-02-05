import { useState } from "react";
import "./App.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepIncrease() {
    setStep((s) => s + 1);
  }

  function handleStepDecrease() {
    step > 1 && setStep((s) => s - 1);
  }

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
          <button onClick={handleStepDecrease}>-</button>
          <span>Step: {step}</span>
          <button onClick={handleStepIncrease}>+</button>
        </div>

        <div>
          <button onClick={handleCountDecrease}>-</button>
          <span>Count: {count}</span>
          <button onClick={handleCountIncrease}>+</button>
        </div>

        <Message count={count} />

        <Reset count={count} setCount={setCount} />
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

function Reset({ count, setCount }) {
  function handleReset() {}

  return (
    <button className={count ? "reset" : "hidden"} onClick={handleReset}>
      Reset
    </button>
  );
}
