import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {login} from '../actions/user';

class Login extends Component {
    constructor(props){
    	super(props);
      this.state = {
        error: '',
      };

      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentWillMount() {
      // this.props.getUser();
    }

    onInputChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    onFormSubmit(e){
      e.preventDefault();
      const {email, password} = this.state;

      this.props.login(email, password)
        .then(res => {
          localStorage.setItem('token', res.data.id)
          this.props.history.push('/profile')
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
                {this.state.error && <div className="form-error">
                  {this.state.error}
                </div>}
                <div className="field">
                  <input type="submit" value="Login" />
                </div>
              </form>
              <p className="text-center">
                Not a member? <Link to="/signup"> Sign up now</Link>
              </p>
            </div>
          </div>
        );
    }
}

export default connect(null,{login})(Login);
