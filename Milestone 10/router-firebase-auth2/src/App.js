import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='' element></Route>
      </Routes>
    </div>
  );
}

export default App;
