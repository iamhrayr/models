import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signout, getUsers} from '../actions/user';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';

class Profile extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      title:'',
      body: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getUsers();
  }

  logout(){
    this.props.signout()
      .then(() => {
        this.props.history.push('/login');
      })
  }

  onInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.addPost(this.state)
  }

  renderUsers(){
    let {users} = this.props;
    return (
      <ol>
        {_.map(users, (user) => {
          // console.log(user)
          return <li>{user.email}</li>
        })}
      </ol>
    )
  }

  render() {
    return (
        <div className="text-center" style={{paddingTop: 50}}>
          <button className="btn" onClick={this.logout.bind(this)}>Logout</button>
          <br /><br />
          <p style={{color:'#dbdbdb',fontSize:20}}>You are Loged in now. It is your profile</p>

          <form onSubmit={this.onFormSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={this.onInputChange}/>
            <br />
            <textarea name="body" placeholder="Body" onChange={this.onInputChange}></textarea>
            <br />
            <button type="submit">Save</button>
          </form>
          {this.props.users.fetched && this.renderUsers()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {signout, getUsers})(withRouter(Profile));
