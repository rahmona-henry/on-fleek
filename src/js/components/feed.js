import React,{Component} from 'react'
import { Link } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Feed extends Component{
 render(){
   const {link,id}= this.props
   return (
     <div className="feed">
      <Link to={`/photo/${id}`}>
        <img key={id} src={link} />
      </Link>
     </div>
   )
 }
}

export {Feed}
