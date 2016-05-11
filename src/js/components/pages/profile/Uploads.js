import React, {Component} from 'react'
import { Link } from "react-router";

export default class Uploads extends Component{
  render(){
    return (
      <div>
        <h1>Photos You've Uploaded</h1>
          <div className="row">

              {this.props.photos.map((photo, i) => {
                return (
                  <div className="profileGrid" key={i}>
                    <Link to={`/photo/${photo.id}`}><img src={photo.link} alt=""/></Link>
                  </div>
                )
              })}
          </div>
      </div>
    )
  }
}
