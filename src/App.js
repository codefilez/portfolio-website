import logo from "./logo.svg";
import "./App.css";

const App = function app() {
  const books = [
    "Domain Driven Design by Eric Evans",
    "The Software Architect Elevator by Gregor Hohpe",
    "Building Microservices by Sam Newman",
    "Patterns of Enterprise Application Architecture by Martin Fowler",
    "Clean Craftsmanship by Robert Martin",
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Recently Read Bookshelf</h2>
        {books.map((bookName) => (
          <p>{bookName}</p>
        ))}
      </header>
    </div>
  );
};

export default App;
