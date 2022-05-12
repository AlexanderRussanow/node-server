const express = require('express');
const path = require('path');
const createPath = require('./utility/createPath.js');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRouter = require('./routes/post-routes.js');
const contactRouter = require('./routes/contact-routes.js');
const postApiRouter = require('./routes/api-post.router.js');

// port 
const PORT = 5555;
// init express
const app = express();
// connect  ejs
app.set('view engine', 'ejs');
// define db
const db = 'mongodb+srv://test-user:sKG72c9Tiu5bOCNW@cluster0.fsbva.mongodb.net/node-server?retryWrites=true&w=majority'
// connect db
mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then((res) => console.log('Connected to MongoDB'))
   .catch((err) => console.log(err));
// app listen
app.listen(PORT, (err) => {
   err ? console.log(err) : console.log(`Server is running on port ${PORT}`);
})
// middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'));
// routes
app.use(postRouter)
app.use(contactRouter)
app.use(postApiRouter)
app.get('/', (req, res) => {
   res.render(createPath('index'));
})
app.get('about-us', (req, res) => {
   res.redirect('/contact');
})
// 404 error
app.use((req, res) => {
   res.status(404).render(createPath('error'));
})


