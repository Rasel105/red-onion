import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Restuarant from './components/Restuarant/Restuarant';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import SingleMealDetails from './components/SingleMealDetails/SingleMealDetails';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/restuarant' element={<Restuarant />}></Route>
        <Route path='/restuarant/:mealID' element={<SingleMealDetails />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
