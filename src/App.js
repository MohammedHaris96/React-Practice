import "./App.css";
import Hello from "./components/Hello";
import Place from "./components/Place";

function App() {
  return (
    <div className="App">
      <Hello name="Haris" hobbies="swimming" />
      <Hello name="Faisal" hobbies="cricket" />
      <Hello name="Arhan" hobbies="football" />
      <Place />
    </div>
  );
}

export default App;
