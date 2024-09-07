import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import Navigate from './components/Navigate';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Chatarea from './components/Chatarea';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigate/>
      <Routes>
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path='/chat' element={<div className='chat-container'> <Sidebar/> <Chatarea/></div>} />
      </Routes>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
