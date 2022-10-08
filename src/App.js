import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <p>
            "If the word doesn't exist, invent it; but first be sure it doesn't
            exist"
            <br /> – Charles Baudelaire
          </p>
        </header>
        <main>
          <Dictionary defaultKeyword="garden" />
        </main>
        <footer>Coded by Hannah Deakin</footer>
      </div>
    </div>
  );
}

export default App;
