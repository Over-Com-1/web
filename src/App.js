import './App.css';
import testing from './log/testing';
import main from './main';
import SignIn from './log/SignIn';
import SignUp from './log/SignUp'
import React from 'react';
import Review from './review/Review';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={main}/>
      <Route exact path="/Review" component={Review}/>
      <Route exact path="/testing" component={testing}/>
      <Route exact path="/SignUp" component={SignUp}/>
      <Route exact path="/SignIn" component={SignIn}/>

    </div>
  )
}

export default App;