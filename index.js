import express from "express"
import ejs from "ejs"

const port=3000;
const app=express();
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/post1',(req,res)=>{
    res.render('post1.ejs')
})
app.get('/post2',(req,res)=>{
    res.render('post2.ejs')
})
app.get('/post3',(req,res)=>{
    res.render('post3.ejs')
})
app.get('/post4',(req,res)=>{
    res.render('post4.ejs')
})
app.listen(port,()=>{
    console.log(`app started at port ${port}`)
})