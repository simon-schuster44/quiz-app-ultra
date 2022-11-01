import "./App.css";
import Header from "./Components/Header/Header.js";
import "./Components/Header/Header.css";
import Navigation from "./Components/Navigation/Navigation.js";
import "./Components/Navigation/Navigation.css";
import Card from "./Components/Card/Card.js";
import "./Components/Card/Card.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Card />
      <Card />
      <Navigation />
    </div>
  );
}

export default App;
