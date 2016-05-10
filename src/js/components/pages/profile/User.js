import React, {Component} from 'react'

export default class User extends Component{
  constructor(props){
    super(props)
    this.styleRating = this.styleRating.bind(this)
  }

  styleRating(){
    console.log("HERE!!!")
    var rows = []
    for (let i = 0; i < this.props.user.styleRating; i++){
      rows.push(<img src="images/flames.svg"/>)
    }
    return rows
  }

  render(){
    const user = this.props.user
    var mostFleekedPhoto = _.maxBy(user.photos, function(photo) { return photo.rating })
    var content = this.styleRating()
    return (
      <div>
        <h1 className='title'>{user.name}</h1>
        <div className='row'>
          <div className='fleekedPhoto'>
            <h2>Top Photo On Fleek</h2>
            <img className='fleekImage' src={mostFleekedPhoto.link} alt=""/>

          </div>
          <div className="profileStats">
            <h2>Your Stats:</h2><br/>
            <h3>Style Rating</h3><br/>
            {content}
            <h3>Trendsetting Rating: {user.connoisseurRating}</h3><br/>
            <h3># of photos voted: {user.votedPhotos.length}</h3>
          </div>
        </div>

      </div>
    )
  }
}
