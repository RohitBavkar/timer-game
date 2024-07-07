import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [playerAdded, isPlayerAdded] = useState("");

  function handleSetName() {
    isPlayerAdded(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerAdded ? playerAdded : "Unknown Entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
