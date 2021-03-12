import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Users from '../components/Users'
import Login from '../components/Login/Login'

const authGuard = (Component) => () => {
    return localStorage.getItem("token") ? (
        <Component />
    ) : (
            <Redirect to="/login" />
        );
};

const Routes = (props) => {
    return (
        <Router {...props}>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/home" render={authGuard(Home)}></Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/about" component={About}></Route>
                <Route path="/users" component={Users}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;