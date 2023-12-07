
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DisneyLogin } from './components/DisneyLogin';
import { Header } from './components/Header';


function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={ <DisneyLogin/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
