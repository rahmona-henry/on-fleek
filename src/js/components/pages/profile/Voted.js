import React, {Component} from 'react'
import { Link } from "react-router";

export default class Voted extends Component{
  constructor(props){
    super(props)
  }

  render(){
    var photo = this.props.photo
    return (
      <div>
        <h1>Fleekest Photo You've Liked</h1>
          <div className='votedContainer'>
            <div className='votedImage'>
              <Link to={`/photo/${photo.id}`}><img src={photo.link} alt=""/></Link>
            </div>
            <div className='votedStats'>
              <p>{photo.caption}</p>
              <p>Rating: {photo.rating}</p>
              <p>UserId: {photo.userId}</p>
            </div>
          </div>
      </div>
    )
  }
}
