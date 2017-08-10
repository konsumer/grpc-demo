module.exports = {
  helloworld: {
    Greeter: {
      SayHello: function(ctx, cb){
        cb(null, {message: 'Hello ' + ctx.request.name})
      },
      SayGoodbye: function(ctx, cb){
        cb(null, {message: 'Bye, ' + ctx.request.name})
      }
    }
  }
}