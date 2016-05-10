import React, {Component} from 'react'

export default class Voted extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>Photos You've Fleek'd</h1>
        {this.props.photos.map((photo, i) => {
          var caption = photo.caption ? '"' + photo.caption + '"' : 'No Caption Provided'
          return (

              <div className='votedContainer'>
                <div className='votedImage'>
                  <img src={photo.link} key={i} alt=""/>
                </div>
                <div className='votedStats'>
                  <p>{caption}</p>
                  <p>Rating: {photo.rating}</p>
                  <p>UserId: {photo.userId}</p>
                </div>
              </div>


          )
        })}
      </div>
    )
  }
}
