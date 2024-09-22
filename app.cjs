const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res)=>{

    res.render('home')

})

app.listen(4000, (e)=>{
    if(e){
        console.log('erro:'+e)
    }
    else{
        console.log('app rodando')
    }
})