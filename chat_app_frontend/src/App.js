// import Register from './components/Register';
// import Login from './components/Login';
import './App.css';
// import Navigate from './components/Navigate';
// import { BrowserRouter,Routes,Route} from "react-router-dom";
import Chatarea from './components/Chatarea';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='chat-container'>
      <Sidebar/>
      <Chatarea/>

    </div>
    // <BrowserRouter>
    // <div className="App">
    //   <Navigate/>
    //   <Routes>
    //      <Route path="/login" element={<Login/>} />
    //      <Route path="/register" element={<Register/>} />
    //   </Routes>
       
    // </div>
    // </BrowserRouter>
  );
}

export default App;
