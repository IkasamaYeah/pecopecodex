import { Routes,Route } from "react-router-dom"
import { Combination } from "./pages/combination";
import { Dictionary } from "./pages/Dictionary";
import { Home } from "./pages/home";
import {Inheritetion} from "./pages/inheritetion";
import { InheritationTest } from "./pages/InheritationTest";
import 'destyle.css';
import './App.css';
import { Header } from "./components/Header";

function App() {
  return (<>
    <Header/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="combination" element={<Combination />}></Route>
        <Route path="dictionary" element={<Dictionary />}></Route>
        <Route path="inheritation" element={<Inheritetion />}></Route>
        <Route path="inheritationtest" element={<InheritationTest />}></Route>
      </Routes>
    </div>
    </>);
}

export default App;
