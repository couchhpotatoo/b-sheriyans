const express=require('express')
const path=require('path');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public'))); //dirname gives the address of the whole,folder where this file is present, and public is the folder where we have our static files like css,js,images etc 
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/profile/:username',(req,res)=>{
   //dynamic routing
    res.send(`welcome,${req.params.username}`);
    //res.send("hello pooja")
})
app.listen(3000,()=>{
    console.log("it is running")
});