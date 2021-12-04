import logo from "./logo.svg";
import "./App.css";

const App = function app() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Domain Driven Design by Eric Evans The Software Architect Elevator by
          Gregor Hohpe Building Microservices: Designing Fine-Grained Systems by
          Sam Newman Patterns of Enterprise Application Architecture by Martin
          Fowler Clean Craftsmanship by Robert Martin
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
