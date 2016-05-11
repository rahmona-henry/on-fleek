import React,{Component} from 'react'
import { Link } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect}         from 'react-redux'

export default class Feed extends Component{
 render(){
   const {link,id,user}= this.props
   let voteArray = user.votedPhotos.map( photo=> photo.id)
   console.log('votes pics',voteArray,id,user.votedPhotos)
   return (
     <div className="feed">
       {voteArray.indexOf(id)<0? <Link to={`/photo/${id}`}>
               <img key={id} src={link} />
             </Link> : <img key={id} src={link} />}
     </div>
   )
 }
}

export {Feed}

export default connect( state => state )(Feed)
