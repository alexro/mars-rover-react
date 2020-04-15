import React from 'react';
import './App.css';
import { evaluate } from './domain/evaluator';

function App() {
  const [input, setInput] = React.useState(
    '5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM\n'
  );

  const [results, setResults] = React.useState([]);

  function updateInput(e) {
    setInput(e.target.value);
  }

  function updateResults() {
    setResults(evaluate(input));
  }

  return (
    <div className="App">
      <header>
        <h4 className="App-header">
          Please enter area details, rover position and moves
        </h4>
      </header>
      <div className="evDetails">
        <textarea
          rows="20"
          cols="60"
          autoFocus
          value={input}
          onChange={updateInput}
          data-testid="text"
        />
      </div>
      <div>
        <button onClick={updateResults}>Evaluate</button>
      </div>
      <div className="evResults">Results:</div>
      <div className="evResults">
        {results.map((r) => (
          <div key={r}>{r}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
