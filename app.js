const express = require('express');
const morgan = require('morgan'); 
const mongoose = require('mongoose');

const blogRoutes = require('./Routes/blogRoutes');

//creating express app
const app = express(); 

//connect to MongoDB:
const dbURI =
  'mongodb+srv://pdk:pdk@blognet.ybzyw.mongodb.net/PeopleBlogs?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then((result) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public')); 

app.use(express.urlencoded({ extended: true })); 
app.use(morgan('dev'));

app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'Computing Education Research Blog',
    snippet:
      'Computing Education Research Blog is perhaps the most definitive and current resource on computing in K-12 education.',
    body: 'Computing Education Research Blog is perhaps the most definitive and current resource on computing in K-12 education. Worth the bookmark for anyone involved in education and computer science, Computing Education Research Blog offers thoughts on pedagogy, political resistance to teaching computing skills, and upcoming conferences, mainly.',
  });

  blog.save() 
    .then((result) => {
      res.send(result);
    }) 
    .catch((err) => console.log(err));
});

app.get('/', (req, res) => {
  
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  
  res.render('about', { title: 'About' });
});

app.use('/blogs',blogRoutes);

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

