import React,{Component} from 'react'
import Signin            from '../signinForm'
import Signup            from '../signupForm'

export default class Login extends Component{
  constructor(){
    super()
    this.state={
      toggleLogInorOut:true
    }
  }

  handleClick(){
    this.setState({toggleLogInorOut: !this.state.toggleLogInorOut})
  }

 render(){
   let button, form;
   if(this.state.toggleLogInorOut){
     button= <button className="btn toggle" onClick={this.handleClick.bind(this)}>Sign Up</button>
     form= <Signin history={this.props.history}/>
   }else{
     button= <button className="btn toggle" onClick={this.handleClick.bind(this)}>Sign In</button>
     form= <Signup history={this.props.history}/>
   }
   return (
     <div class="login">
       <div class="logo">
         <img src="images/peacock.svg"/>
         <h1>on-fleek</h1>
       </div>
        {form}
        <div class="sign-ins">
          {button}
        </div>
     </div>
   )
 }
}
