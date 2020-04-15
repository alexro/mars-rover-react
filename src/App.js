import React from 'react';
import './App.css';
import { evaluate } from './domain/evaluator';

function App() {
  const [input, setInput] = React.useState(
    '5 5\n 1 2 N\n LMLMLMLMM \n 3 3 E \n MMRMMRMRRM \n'
  );
  const [results, setResults] = React.useState([]);

  function updateInput(e) {
    setInput(e.target.value);
  }

  function updateResults() {
    if (input) {
      setResults(evaluate(input));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Please enter area details, rover position and moves
      </header>
      <div className="evDetails">
        <textarea
          rows="20"
          cols="60"
          autoFocus
          value={input}
          onChange={updateInput}
        />
      </div>
      <div>
        <button onClick={updateResults}>Evaluate</button>
      </div>
      <div className="evResults">Results:</div>
      <div className="evResults">
        {results.map((r) => (
          <div>{r}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
