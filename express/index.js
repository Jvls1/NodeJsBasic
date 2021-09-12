const express = require('express') //import express
const app = express() //starting express

// .get to create the route
// first argument = rota; 2° = what he does

app.get('/', function(req, res){
    // just one response
    res.send('wellcome!')
})

app.get('/jornal', function(req, res){
    res.send('wellcome to my jornal!')
})

// query params
// dont use query params
app.get('/channel/youtube', function(req, res) {
    let channel = req.query['channel']
    
    if(channel){
        res.send(channel)
    } else{
        res.send('no channel')
    }
})

// route with parameters
app.get('/hello/:name/:company', function(req, res){
    // req = dados enviados pelo usuário
    // res = resposta que vai ser enviada

    // req.params.nameOfParam for acess the parameter
    let name = req.params.name
    let company = req.params.company
    res.send('hi ' + name + 'from' + company)
})

// optinal parameter
app.get('/blog:article?', function(req, res){
    let article = req.params.article
    // checking if have parameter or not 
    if(article){
        res.send('Article: ' + article)
    }else {
        res.send('wellcome to my blog!')
    }
})

app.listen(3000, function(erro){
    if(erro) {
        console.log('error!')
    }else {
        console.log('sucess!')
    }
})
