import logo from './logo.svg';
import './App.css';
import SignupCard from './components/login/Signup';
import Login from './components/login/Login';
import { Route, Routes } from 'react-router-dom';
import Note from './components/note/Note';

function App() {
  return <>
  <Routes>
    <Route path="/" element={<SignupCard/>} ></Route>
    <Route path="/login" element={<Login/>} ></Route>
    <Route path="note" element={<Note/>} ></Route>
      
    

  </Routes>
    
  </>
}

export default App;
