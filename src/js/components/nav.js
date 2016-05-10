import React,{Component} from 'react'
import { Link }          from "react-router";
import {connect}         from 'react-redux'

class Nav extends Component{
 render(){
   const {location,user}=this.props
   let indexActive=location.pathname==='/'? 'active' : ''
   let profileActive=location.pathname.match(/^\/profile/)? 'active' : ''
   let filterActive=location.pathname.match(/^\/filter/)? 'active' : ''
   let uploadActive=location.pathname.match(/^\/upload/)? 'active' : ''
   let loginActive=location.pathname.match(/^\/login/)? 'active' : ''
   const customizedNav= user.name!=='visitor'?
   [<Link to='/upload' class={uploadActive} key={Date.now()}>upload</Link>,
    <Link to='/profile' class={profileActive} key={Date.now()+11}>profile</Link>] :
    <Link to='/login' class={loginActive} key={Date.now()}>login</Link>
   return (
     <nav>
      <Link to='/filter' class={filterActive} key='2'>OnFleek</Link>
      <Link to='/' class={indexActive} key='1'>vote</Link>
      {customizedNav}
     </nav>
   )
 }
}

export {Nav}

const mapStatetoProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStatetoProps
)(Nav)
