const express=require('express')
const app=express()

app.use(express.json()); //ye middleware hai jo request body ko json me convert kr deta hai, agar aapko request body me kuch data chahiye to ye middleware use karna padega
app.use(express.urlencoded({extended:true})); //ye middleware hai jo request body ko url encoded format me convert kr deta hai, agar aapko request body me kuch data chahiye to ye middleware use karna padega
app.use((req,res,next)=>{
    console.log("middleware chalao") // abhi request middleware ne forward nhi ki aage (till this step)
    next(); //next() function call karne se ye request aage chale jaegi 
}); //jitni bhi request aaigi iss server pe(/profile,/login) usse phle ye statement chlega thatts a middleware

app.get('/',(req,res)=>{
    res.send("response from express server, welcome to express")
})
app.get('/profile',(req,res)=>{
    res.send("hello there,this is me,pooja rawat")
})
app.listen(4000)