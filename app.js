const express = require('express');
const app = express();
const port = 3000;
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');


app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.get('/', middleware.requireLogin, (req, res, next)=>{

    res.render('home', {
        pageTitle: 'Home page'
    })
})

app.listen(port, ()=> console.log('Server is running on port:', port));