require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
//const { userExtractor } = require('./middleware/auth');
const logoutRouter = require('./controllers/logout');
const { MONGO_URI } = require('./config');

(async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Running DB');
    } catch (error) {
        console.log(error);
    }
})();

/** */
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Rutas front-end
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/img', express.static(path.resolve('img')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/main', express.static(path.resolve('views', 'main')));
app.use('/my-rutine-friday', express.static(path.resolve('views', 'my-rutine-friday')));
app.use('/my-rutine-monday', express.static(path.resolve('views', 'my-rutine-monday')));
app.use('/my-rutine-thursday', express.static(path.resolve('views', 'my-rutine-thursday')));
app.use('/my-rutine-tuesday', express.static(path.resolve('views', 'my-rutine-tuesday')));
app.use('/my-rutine-wednesday', express.static(path.resolve('views', 'my-rutine-wednesday')));
app.use('/profile', express.static(path.resolve('views', 'profile')));
app.use('/register', express.static(path.resolve('views', 'register')));
app.use('/weight-height', express.static(path.resolve('views', 'weight-height')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));

app.use(morgan('tiny'));

//rutas back-end
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);

module.exports = app;