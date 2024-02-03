import { Routes,Route } from "react-router-dom"
import { Combination } from "./pages/combination";
import { Workes } from "./pages/workes";
import { Home } from "./pages/home";
import './App.css';

function App() {
  return (<>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="combination" element={<Combination />}></Route>
        <Route path="workes" element={<Workes />}></Route>
      </Routes>
    </div>
    </>);
}

export default App;
