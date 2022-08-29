import React from "react";
import Emoji from "./Emoji";
import Emojipedia from "../Emojipedia";

function createEmoji(emojipedia) {
  return (
    <Emoji
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
