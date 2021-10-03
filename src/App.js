import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Haris" hobbies="swimming" />
      <Hello name="Faisal" hobbies="cricket" />
      <Hello name="Arhan" hobbies="football" />
    </div>
  );
}

export default App;
