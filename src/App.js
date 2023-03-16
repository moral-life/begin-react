import Hello from "./Hello";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Hello name ="Minha" color = "red"/>
      <Hello name ="Hani" color = "blue"/>
    </div>
  );
}

export default App;
