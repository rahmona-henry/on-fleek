import React,{Component} from 'react'
import {connect}         from 'react-redux'
import {postNewFeed}     from '../../reducers'
import {_newPhoto, getFeed,getTrendingPhotos}       from '../../actions'
import Searching         from '../searching'

class Upload extends Component{
 constructor(props){
   super(props)
   this.state={
     id:0,
     location: '',
     content: ''
   }
 }
 componentDidMount(){
     $('#upload').append($.cloudinary.unsigned_upload_tag("vfcanmwr",{ cloud_name: 'vicken' }))
                 .bind('cloudinarydone', this.afterSavetoCloudinary.bind(this))
                 .bind('cloudinaryprogress', this.uploadProgress);
 }
 afterSavetoCloudinary(e,data){
     let that=this
     var url = data.result.secure_url

     // Set parameters for cloudinary auto-cropping auto-cropping
     const subUrl = 'https://res.cloudinary.com/vicken/image/upload/'
     const insertIndex = subUrl.length
     const widthParam = 'c_scale,w_450/'
     url = url.substring(0,insertIndex) + widthParam + url.substr(insertIndex)

     $('#preview').attr('src', url)
     $('#submitUpload').attr('disabled',false).click((e)=>{
       e.preventDefault()
       if(that.refs.location.value){
         that.props.dispatch(_newPhoto(url))
         that.props.history.push('/')
         let newFeed= {categoryId: that.state.id,countryId:that.state.location, link:url}
         //post add to feeds, and post to server
         postNewFeed(newFeed)
         that.props.dispatch(getFeed())
         that.props.dispatch(getTrendingPhotos())
       }else{
         $('#location').focus();
       }
     })
 }
 uploadProgress(e,data){
   var percent= Math.round((data.loaded * 100.0) / data.total) + '%' ;
   $('.progress_bar').css('width',percent).html(percent);
 }
 changeSearchValue(payload){
   this.refs.location.value =payload.name
   this.setState({...this.state, location: payload.id, content: ''})
 }
 handleChangeCtg(e){
   this.setState({...this.state, id : e.target.value})

 }
 handleChangeLct(e){
   let keyword = e.target.value
   let content = <Searching {...this.props}
     changeSearchValue={this.changeSearchValue.bind(this)}
     searchString={keyword} />
   this.setState({...this.state, content: content})

 }
 render(){
    let divStyle = {
      backgroundColor: 'green',
      height: '20px',
      width: '0px'
    };
    let options = this.props.categories.map((category,i)=>{
      return <option value={category.id} key={i}>{category.category}</option>
    })
   return (
     <div id='uploadpage'>
       <form id='upload'>
       </form>
       <img src='' id='preview'/>
       <div class='progress_bar' style={divStyle}></div>
       <div class='inputfield'>
         <label>Category</label>
           <select onChange={this.handleChangeCtg.bind(this)}>
              {options}
           </select>
       </div>
         <div class='inputfield'>
           <label>location</label>
           <input type='text' required ref='location'  onChange={this.handleChangeLct.bind(this)}/>
             {this.state.content}
         </div>
         <button id='submitUpload' disabled>Submit</button>
     </div>
   )
 }
}
Upload.contextTypes = {
  router: function() { return React.PropTypes.func.isRequired}
};

export default connect((state)=>{
  return {
    categories : state.categories,
    possibleLocations: state.filter.possibleLocations
  }
})(Upload)
