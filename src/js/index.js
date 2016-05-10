import 'babel-polyfill'
//import the stylesheets
import '../style/index.scss'
//import the libs
import React,{Component}       from 'react'
import {render}                from 'react-dom'
import { Provider }            from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore} from 'react-router-redux'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import request                 from 'superagent'
//import the reducer

import reducer,{loadFeeds,loadFollowedPhoto}     from './reducers'
import {_updatePossibleLocations, getTrendingPhotos, getCategories, getFeed, getUserInfo } from './actions'

//import the components
import Layout         from './components/pages/layout'
import Feedcontainer  from './components/pages/feedcontainer'
import Imagepage      from './components/pages/imagepage'
import Profile        from './components/pages/profile'
import Filter       from './components/pages/filter'
import Login          from './components/pages/login'
import Upload         from './components/pages/upload'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(getTrendingPhotos())
store.dispatch(getCategories())
store.dispatch(getFeed())
store.dispatch(getUserInfo())


if (window.location.hash == '#_=_') {
    window.location.hash = ''; // for older browsers, leaves a # behind
    history.replaceState('', window.location.pathname); // nice and clean
}

class App extends Component{
 componentDidMount(){

   request.get('/locations')
         .end((err, res) => {
           let possibleLocations = JSON.parse(res.text)
           possibleLocations = possibleLocations.countries
           store.dispatch(_updatePossibleLocations(possibleLocations))
         })
    loadFollowedPhoto(store.dispatch)

 }
 render(){
   return (
     <Provider store={store}>
       <Router history={history}>
         <Route path="/" component={Layout}>
           <IndexRoute component={Feedcontainer}></IndexRoute>
           <Route path="/photo/:id" component={Imagepage}></Route>
           <Route path="/profile" component={Profile}></Route>
           <Route path='/filter' component={Filter}></Route>
           <Route path='/login' component={Login}></Route>
           <Route path='/upload' component={Upload}></Route>
         </Route>
       </Router>
     </Provider>
   )
 }
}

render(<App />, document.getElementById('app'))

$.cloudinary.config({ cloud_name: 'vicken', api_key: '226983578886724'})
