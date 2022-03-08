import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project was coded by{" "}
            <a
              href="https://portfolio-atcv.netlify.app/"
              target="_blank"
              id="link"
              rel="noreferrer"
            >
              Ana Teresa
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/anateresavasques/dictionaryreactapp"
              target="_blank"
              id="link"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
