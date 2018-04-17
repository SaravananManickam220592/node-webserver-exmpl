const express = require('express');
const hbs = require('hbs');
const port=process.env.PORT || 3000;


var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/', (request, response) => {
    response.render('home.hbs',{
        pagetTitle : 'Home Page',
        currentYear: new Date().getFullYear(),
        welcome_Message: 'Welcome Saravanan !!!!'
    });
});

app.get('/about',(request,response) => {
    response.render('about.hbs',{
        pagetTitle : 'About Page',
        currentYear: new Date().getFullYear()
    });
})

app.listen(port,()=>{
    console.log(`App running in Port ${port} `);
});

