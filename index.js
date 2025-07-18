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
app.get('/file/:filename',(req,res)=>{
   fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,data)=>{
  res.render('show',{filename:req.params.filename,data:data})
   

})
})

app.get('/edit/:filename',(req,res)=>{
   fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,data)=>{
  res.render('edit',{filename:req.params.filename,data:data})
   

})
})
app.post('/edit',(req,res)=>{
   fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{
    res.redirect('/')
})
})


app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        res.redirect('/')
})
})
app.listen(3000)