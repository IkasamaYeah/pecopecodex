import { Routes,Route } from "react-router-dom"
import { Combination } from "./pages/combination";
import { Dictionary } from "./pages/Dictionary";
import { Home } from "./pages/home";
import './App.css';

function App() {
  return (<>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="combination" element={<Combination />}></Route>
        <Route path="dictionary" element={<Dictionary />}></Route>
      </Routes>
    </div>
    </>);
}

export default App;
