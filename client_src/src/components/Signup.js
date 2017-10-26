import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signup} from '../actions/user';
import {Link, Redirect} from 'react-router-dom';

class Signup extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        error: '',
      };

      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onFormSubmit(e){
      e.preventDefault();
      const {email, password, confirmPassword} = this.state;
      if (password !== confirmPassword) {
        this.setState({error: 'Passwords do not match!'});
        return;
      }

      this.props.signup(email, password)
        .catch(err => {
          this.setState({error: err})
        });
    }

    render() {
        return (
          <div>
            {/*{isAuthenticated() && <Redirect to="/profile" />}*/}
            <div className="grid">
              <form className="form login" onSubmit={this.onFormSubmit}>
                <div className="field">
                  <input type="text" name="email" placeholder="Email" onChange={this.onInputChange} />
                </div>
                <div className="field">
                  <input type="password" name="password" placeholder="Password" onChange={this.onInputChange} />
                </div>
                <div className="field">
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.onInputChange} />
                </div>
                {this.state.error && <div className="form-error">
                  {this.state.error}
                </div>}
                <div className="field">
                  <input type="submit" value="Sign Up" />
                </div>
              </form>
              <p className="text-center">
                Already a member? <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        );
    }
}


export default connect(null, {signup})(Signup)
