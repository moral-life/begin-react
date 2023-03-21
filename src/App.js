import Hello from "./Hello";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Wrapper from "./Wrapper";
import Counter from "./Counter";
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Hello name ="Minha" color = "red"/>
        <Hello name ="Hani" color = "blue"/>
        <Hello />
        <Hello isSpecial={true}/>
      </Wrapper>
      <Counter />
    </div>
  );
}

export default App;
