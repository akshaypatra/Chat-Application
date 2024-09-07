import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import Navigate from './components/Navigate';
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigate/>
      <Routes>
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
      </Routes>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
