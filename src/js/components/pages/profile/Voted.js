import React, {Component} from 'react'

export default class Voted extends Component{
  constructor(props){
    super(props)
  }

  render(){
    var photo = this.props.photo
    console.log('props for photo', photo)
    return (
      <div>
        <h1>Fleekest Photo You've Liked</h1>
          <div className='votedContainer'>
            <div className='votedImage'>
              <img src={photo.link} alt=""/>
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
