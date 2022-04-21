// SETTING BASIC EXPRESS ROUTES

const express=require("express");
// imported express module that we installed
const path=require('path');
const app=express();
const port=80;

//PUG STUFF
//set the TEMPLATE ENGINE as PUG
app.set('view engine', 'pug')

//set the views(directory where template file is)
app.set('views',path.join(__dirname,'views'))

//demo.pug
//our pug demo endpoint(to get title and message from demo.pug)
app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
  })

//index.pug
//endpoint for get request
app.get('/',(req,res)=>{
    const con="this is the best";
    const params={'title':'ifrah has a pug','content':con}
    res.status(200).render('index.pug',params)
})

//endpoint for post request
app.post('/',(req,res)=>{
    console.log(req.body);
    const params={'message':'your form has been submitted successfully'}
    res.status(200).render('index.pug',params)
})


//STATIC STUFF
//serving static files..here serving file in folder 'static'
app.use('/static',express.static('static'))

//EXPRESS STUFF

//for getting data from our form
app.use(express.urlencoded());

// app.get("/",(req,res)=>{
//     res.send("this is my first express app")
// })
// whenever someone goes to / of this app(request handled at / endpoint), a callback function(arrow function here) will b called 

// app.get("/about",(req,res)=>{
//     res.status(200).send("this is about page of my first express app")
// })
// request handled at /about endpoint
// status code can also b included

// app.get("/this",(req,res)=>{
//     res.status(404).send("this page is not found")
// })

// FOR POST REQUEST :
// app.post("/about",(req,res)=>{
//     res.send("this is post request of about page of my first express app")
// })

app.listen(port,()=>{
console.log(`application started successfully on port ${port}`);
})
// which port u wonna listen this