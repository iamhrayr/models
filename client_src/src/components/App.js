import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import style from '../style.css';



class App extends Component {
  render() {
    return (
      <div>
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    );
  }
}

function isAuthenticated(){
  return true;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated()
      ? <Component {...props}/>
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
  )}/>
);

export default App;
