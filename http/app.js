let http = require ('http')

http.createServer(function(req, res){
    res.end('wellcome to my site!')
}).listen(3000)

console.log('my server in runing!')
