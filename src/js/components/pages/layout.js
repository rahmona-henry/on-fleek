import React,{Component} from 'react'
import Nav from '../nav'

export default class Layout extends Component{
 render(){
   let {location}= this.props
   return (
     <div>
       <Nav location={location}/>
       <div class="page">
         {this.props.children}
       </div>
     </div>
   )
 }
}
