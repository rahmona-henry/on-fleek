var request = require('superagent')

request.post('http://localhost:3000/users/vote')
  .send({ vote:1, photoId: 1, imageId: 1 })
  .end(function(err,res){
    console.log(res.body)
  })
