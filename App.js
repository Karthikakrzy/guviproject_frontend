import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes,Route} from 'react-router-dom';

import Login from "./Login";
import Register from './Register';
import Bmicalculator from './Bmicalculator';
function App() {
  return (
    <Router>

      <Routes>
     
         <Route path="/login" element={<Login/>}  />
         <Route path="/register" element={<Register/>}  />
         <Route path="/bmicalculator" element={<Bmicalculator/>}  />
      </Routes>
    </Router>
  );
}

export default App;
