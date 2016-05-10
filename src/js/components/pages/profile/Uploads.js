import React, {Component} from 'react'

export default class Uploads extends Component{
  render(){
    return (
      <div>
        <h1>Photos You've Uploaded</h1>
          <div className="row">

              {this.props.photos.map((photo, i) => {
                return (
                  <div className="profileGrid" key={i}>
                    <img src={photo.link} alt=""/>
                  </div>
                )
              })}
          </div>
      </div>
    )
  }
}
