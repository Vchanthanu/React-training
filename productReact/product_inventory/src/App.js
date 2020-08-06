import React from 'react';
import Login from './Login'
import SignUp from './SignUp'
import Product from './Product'
import Header from './Header';
import Dashboard from "./Dashboard";
import AddEditProduct from './AddEditProduct'
import {Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div >
    <Header/>
    <Switch>
      <Route exact path='/' component={Login}></Route>
      <Route path='/signup' component={SignUp}></Route>
      <Route path='/product' component={Product}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/addeditproduct' component={AddEditProduct}></Route>
    </Switch>
    </div>
  );
}

export default App;
