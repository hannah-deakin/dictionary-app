import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <p>
            <em>
              "If the word doesn't exist, invent it; <br />
              but first be sure it doesn't exist"
            </em>{" "}
            – Charles Baudelaire
          </p>
        </header>
        <main>
          <Dictionary defaultKeyword="explore" />
        </main>
        <footer>
          Code by{" "}
          <a
            href="https://github.com/hannah-deakin"
            target="_blank"
            rel="noreferrer"
          >
            Hannah Deakin
          </a>
          , open-source on{" "}
          <a
            href="https://github.com/hannah-deakin/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and hosted on{" "}
          <a
            href="https://tourmaline-faloodeh-b7b641.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
