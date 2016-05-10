import React,{Component} from 'react'
import { Link } from "react-router";

export default class Feed extends Component{
 render(){
   const {link,id}= this.props
   return (
     <div className="feed">
      <Link to={`/photo/${id}`}>
        <img src={link} />
      </Link>
     </div>
   )
 }
}

export {Feed}
