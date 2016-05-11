import React,{Component} from 'react'
import {postSignin,loadFeeds,loadFollowedPhoto}      from '../reducers'
import { connect }       from 'react-redux'
import { getUserInfo }   from '../actions'

class Signup extends Component{
 handleSignup(e){
   e.preventDefault()
   let email = this.refs.email.value
   let fullName = this.refs.name.value
   let password = this.refs.password.value
   let {successLogin,history} = this.props
   postSignin('/users/new',{email,password,fullName},history,successLogin)
 }
 render(){
   return(
     <form>
       <label>Full Name:</label>
       <input type="text" name="Fullname" ref='name' placeholder='Sam Smith' required/><br/>
       <label>Email:</label>
       <input type="email" name="emal" ref='email' required/><br/>
       <label>Password:</label>
       <input type="password" name="password" ref='password' required/>
       <button className="btn" onClick={this.handleSignup.bind(this)} type='submit'>Sign Up</button>
     </form>
   )
 }
}

const mapDispatchToProps= (dispatch) =>{
  return {
    successLogin :(user)=>{
      user= {...user,loggedIn:true}
      dispatch(getUserInfo())
      loadFeeds(dispatch)
      loadFollowedPhoto(dispatch)
    }
  }
}

export default connect(null,mapDispatchToProps)(Signup)
