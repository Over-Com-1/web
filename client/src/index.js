import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../components/Main';
import SignUp from '../log/SignUp'
import SignIn from '../log/SignIn'
import Profile from '../components/Profile';
import Reservation from '../components/Reservation'
import Court from '../components/court';
import Court2 from '../components/court2';


function App() {
    return (
        <BrowserRouter>
             <Route exact path="/" component={Main}/>
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/SignIn" exact component={SignIn} />
            <Route path="/Reservation" exact component={Reservation} />
            <Route path="/Profile" exact component={Profile} />
            <Route path="/Court" exact component={Court} />
            <Route path="/Court2" exact component={Court2} />
        </BrowserRouter>
    )
}

export default App