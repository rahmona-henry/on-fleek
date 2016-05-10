
import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'
import request             from 'superagent'

import feeds      from './feeds'
import user       from './user'
import categories from './categories'
import filter     from './filter'
import trending   from './trending'
import following  from './followedPhoto'

export default combineReducers({
  feeds,
  user,
  categories,
  filter,
  following,
  routing: routerReducer,
  filter,
  trending
})


const postVotes = (vote) => {
  request.post('/users/vote')
         .send(vote)
         .end()
}

const postNewFeed = (photo) => {
  request.post('/users/newImage')
         .send(photo)
         .end()
}

const postSignin =(url,userInfo,history,cb) =>{
  request.post(url)
         .send(userInfo)
         .end((err,user)=>{
           if(err){
             console.log('login err',err)
           }else{
             user=JSON.parse(user.text)
             cb(user)
             history.goBack()
           }
         })
}

const loadFeeds = (dispatch) =>{
  request.get('/getFeed')
         .end((err,feeds)=>{
           feeds=JSON.parse(feeds.text)
           dispatch({type:'LOAD_FEEDS',feeds})
         })
}
const loadFollowedPhoto = (dispatch) =>{
  request.get('/users/myFollowPhoto')
         .end((err,feeds) => {
          feeds= JSON.parse(feeds.text)
          dispatch({type:'LOAD_FOLLOWED_PHOTOS',feeds})
         })
}

const postFollow = (owner,dispatch) => {
  request.post('/users/following')
         .send(owner)
         .end(()=>{
           loadFollowedPhoto(dispatch)
         })
}

const postUnfollow =(owner,dispatch) => {
  request.post('/users/unfollowing')
         .send(owner)
         .end(()=>{
           loadFollowedPhoto(dispatch)
         })
}

export {
  postUnfollow,
  loadFollowedPhoto,
  postFollow,
  postVotes,
  postNewFeed,
  postSignin,
  loadFeeds
}
