
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/' element={}/>
          <Route path='/' element={}/>
          <Route path='/' element={}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
