import React, {Component} from 'react'
import { Link } from "react-router";

export default class User extends Component{
  constructor(props){
    super(props)
    this.styleRating = this.styleRating.bind(this)
  }

  styleRating(){
    var rows = []
    for (let i = 0; i < this.props.user.styleRating; i++){
      rows.push(<img key={i} className='profileFlame' src="images/flames.svg"/>)
    }
    return rows
  }

  trendRating(){
    var rows = []
    for (let i = 0; i < this.props.user.connoisseurRating; i++){
      rows.push(<img key={i} className='profileFlame' src="images/flames.svg"/>)
    }
    return rows
  }

  render(){
    const user = this.props.user
    var mostFleekedPhoto = _.maxBy(user.photos, function(photo) { return photo.rating })

    var styleRow = this.styleRating()
    var trendRating = this.trendRating()

    var content = mostFleekedPhoto ? <div><span><div className="heart-container"><img src="/images/heart.svg" /></div>Your fleekest<div className="heart-container"><img src="/images/heart.svg" /></div></span>
  <Link to={`/photo/${mostFleekedPhoto.id}`}><img className='fleekImage' src={mostFleekedPhoto.link} alt=""/></Link></div> : <p>Why don't you upload a photo?</p>
    return (
      <div>
        <h1 className='title'>{user.name}</h1>
        <div className='row'>
          <div className='fleekedPhoto'>
            {content}
          </div>
          <div className="profileStats">
            <h1>Stats</h1><br/>
            <h3>Style Rating</h3><br/>
            {styleRow}
            <h3>Trendsetting Rating </h3><br/>
            {trendRating}
            <h3># of photos voted: {user.votedPhotos.length}</h3>
          </div>
        </div>

      </div>
    )
  }
}
