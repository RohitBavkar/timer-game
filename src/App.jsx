import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <section id="player">
        <h2>Try to score 100!</h2>
      </section>{" "}
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}></TimerChallenge>
        <TimerChallenge title="Not Easy" targetTime={5}></TimerChallenge>
        <TimerChallenge title="Tough" targetTime={10}></TimerChallenge>
        <TimerChallenge title="Pros Only" targetTime={15}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
