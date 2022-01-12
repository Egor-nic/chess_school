require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const process = require('process');
const FileStore = require('session-file-store')(session);


const app = express();
const cookieParser = require('cookie-parser');

const { PORT } = process.env ?? 3011;
const indexRouter = require('./routers/indexRouter');
const userRouter = require('./routers/userRouter');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(morgan('dev'))

app.use(cookieParser());
app.use(session({
  store: new FileStore(),
  secret: process.env.SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  name: 'auth',
}));



app.use('/', indexRouter);
app.use('/user', userRouter);



app.listen(PORT, () => {
  console.log('server started on port:', PORT)
})
