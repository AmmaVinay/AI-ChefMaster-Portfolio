import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import MyNavbar from './Components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import Product from './Components/Product';
import Career from './Components/Career'
import Company from './Components/Company';
import SineUpForm from './Components/SineUpForm';
import LoginForm from './Components/LoginForm';
import CardAIAssistant from '../src/Components/HomeComponents/CardAIAssistant'
import CardAIKitchen from '../src/Components/HomeComponents/CardAIKitchen'
import CardAINutritionManager from '../src/Components/HomeComponents/CardAINutritionManager'
import NotFound from './Components/NotFound';
 
const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/career' element={<Career />} />
        <Route path='/company' element={<Company />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SineUpForm />} />
        <Route path='/aiassistant' element={<CardAIAssistant />} />
        <Route path='/aikitchen' element={<CardAIKitchen />} />
        <Route path='/ainutritionmanager' element={<CardAINutritionManager />} />
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
