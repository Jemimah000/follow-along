import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct} from './routes/route.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/createproduct' element={<CreateProduct/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App