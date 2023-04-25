const express =require('express')
const app =express()
const home=require('./home.js')
const aboutUs=require('./aboutUs.js')
const ContactUS=require('./ContactUS.js')
const categories=require('./categories.js')
const services=require('./services.js')
const cart=require('./cart.js')


app.get('/',(request,response) =>{
  response.send("Welcome to sandeepa's home page")
})

app.use('/home',home)
app.use('/aboutUS',aboutUs)
app.use('/ContactUs',ContactUS)
app.use('/categories',categories)
app.use('/services',services)
app.use('/cart',cart)


app.listen(3800)