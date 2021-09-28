import "./App.css";
import Hello from "./components/Hello";
import State from "./components/State";

function App() {
  return (
    <div className="App">
      <Hello name="Haris" />
      <Hello name="Faisal" />
      <Hello name="Arhan" />
      <State/>
    </div>
  );
}

export default App;
