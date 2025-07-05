const express=require('express');
const fs=require('fs')
const app=express();
const path=require('path');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"public")))
app.get('/',(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
res.render("index",{files:files})

    })
   

})
app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        res.redirect('/')
})
})
app.listen(3000)