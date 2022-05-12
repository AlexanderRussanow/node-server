const express = require('express');
const path = require('path');
const createPath = require('./utility/createPath.js');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRouter = require('./routes/post-routes.js');
const contactRouter = require('./routes/contact-routes.js');
const postApiRouter = require('./routes/api-post.router.js');
const chalk = require('chalk');
require('dotenv').config();

// messgaes for console
const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;

// init express
const app = express();
// connect  ejs
app.set('view engine', 'ejs');
// connect db
mongoose
   .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then((res) => console.log(successMsg('Connected to MongoDB')))
   .catch((err) => console.log(errorMsg(err)));
// app listen
app.listen(process.env.PORT, (err) => {
   err ? console.log(err) : console.log(successMsg(`Server is running on port ${process.env.PORT}`));
})
// middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'));
// routes
app.use(postRouter)
app.use(contactRouter)
app.use(postApiRouter)
app.get('/', (req, res) => res.render(createPath('index')))
app.get('about-us', (req, res) => res.redirect('/contact'))
// 404 error
app.use((req, res) => res.status(404).render(createPath('error')))


