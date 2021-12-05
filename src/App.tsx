import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./routes/Welcome";

const App = function app() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <Link to="/books">Books</Link>
        <Link to="/blog">Blog</Link>
      </header>
    </div>
  );
};

export default App;
