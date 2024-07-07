import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
  const timer = useRef();
  const dialog = useRef();

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function resetTime() {
    setRemainingTime(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={resetTime}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running......" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
export default TimerChallenge;
