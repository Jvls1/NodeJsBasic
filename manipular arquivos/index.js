const fs = require('fs') //File-System

/*
fs.readFile('./test.txt',{encoding: 'utf-8'},(erro, datas) =>{
    if(erro){
        console.log('erro')
    }else{
        console.log(datas)
    }
}) 

fs. writeFile('./test.txt', 'New', (erro) =>{
    if(erro){
        console.log('erro')
    }
})


fs.readFile('./user.json',{encoding: 'utf-8'}, (erro, datas) => {
    if(erro){
        console.log('erro')
    }else{
        let conteudo = JSON.parse(datas)
        conteudo.name = 'JoJo'
        console.log(conteudo)
        fs.writeFile('./user.json', JSON.stringify(conteudo),(erro) => {
            if(erro){
                console.log('erro')
            }
        })
    }
})
*/
