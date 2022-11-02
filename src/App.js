import "./App.css";
import Header from "./Components/Header/Header.js";
import Navigation from "./Components/Navigation/Navigation.js";
import Card from "./Components/Card/Card.js";
import "./Components/Body/Body.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
