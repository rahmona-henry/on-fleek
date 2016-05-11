import React, {Component} from 'react'
import { Link } from "react-router";

export default class OnFleek extends Component{
  render(){
    return (
      <div>
        <h1>Top Photos On Fleek</h1>
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
