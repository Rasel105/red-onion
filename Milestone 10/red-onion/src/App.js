import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Form/Login/Login';
import { Route, Routes } from 'react-router-dom';
import FoodMenu from './components/Pages/FoodMenu/FoodMenu';
import Breakfast from './components/Pages/Breakfast/Breakfast';
import Lunch from './components/Pages/Lunch/Lunch';
import Dinner from './components/Pages/Dinner/Dinner';
import Register from './components/Form/Register/Register';
import Bills from './components/Pages/Bills/Bills';
import RequireAuth from './components/Form/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/header' element={<Header></Header>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}> </Route>
        <Route path='/menu' element={<FoodMenu></FoodMenu>}>
          <Route path='breakfast' element={<Breakfast />}></Route>
          <Route path='lunch' element={<Lunch />}></Route>
          <Route path='dinner' element={<Dinner />}></Route>
        </Route>
        <Route path='bill' element={
          <RequireAuth>
            <Bills />
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
