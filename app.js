// const { render } = require('ejs');
const express = require('express');
// const { create, result } = require('lodash');
// cons morgan = require('morgan');
const mongoose = require('mongoose');
const morgan = require('morgan');

const blogRoutes = require('./Routes/blogRoutes');



//morgan is used in replacement of using middleware function. i.e., easy to use middleware functions using morgan
// const morgan = require('morgan');


//express app
const app = express();
 
//connect to mongoDB
const dbURI='mongodb+srv://p_d_kodiyatar:praful01@cluster0.ybzyw.mongodb.net/node-tuts?retryWrites=true&w=majority'

mongoose.connect(dbURI,{ useNewURLParser:true, useUnifiedTopology: true})
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err));

// app.use(morgan('tiny'));

//register view engine
app.set('view engine','ejs');
// app.set('view','myviews');//use this when your html files are not in views folder and some other folder here other folder i used for example is myviews.
//but as i have my all html pages are in views folder so i dont need that statement.




//listen for requists


app.use(express.static('public'));
app.use(express.urlencoded({extended : true}))
app.use(morgan('dev'));

app.use((req,res,next)=>{
    res.locals.path = req.path;
    next();
});

//mongoose and mongo sandbox routes

// routes
// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title:'new blog 2',
//         snippet:'about new blog',
//         body:'more about my new blog'
//     });

//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// })

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })



// app.get('/single-blog',(req,res)=>{
//     Blog.findById('6172d12eb2bee6a09cb34aab')
//     .then((result)=>res.send(result))
//     .catch((err)=>console.log(err))
// });


app.get('/',(req,res)=>{

    res.redirect('/blogs');
    // const blogs = [
    //     {title:'praful reads book',snippet:'he is reading books of programming and not doing any practicals'},
    //     {title:'praful watches tutorials',snippet:'he is watching tutorials of programming and not doing any practicals'},
        
    // ];
    // // res.send('<p>home page</p>');
    // // res.sendFile('views/index.html',{root: __dirname});
    // res.render('index',{title:'home',blogs});
})

// app.use((req,res,next)=>{
//     console.log('in the next middleware');
//     next();
// })


app.get('/about',(req,res)=>{
    // res.send('<p>about page</p>');
    // res.sendFile('/views/about.html',{ root : __dirname})
    res.render('about',{title:'about'});
})



// app.get('/blogs',(req,res)=>{
//     Blog.find().sort({createdAt:-1})
//     .then((result)=>{
//         res.render('index',{title:'all-blogs', blogs:result})
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// });

// app.post('/blogs',(req,res)=>{
//     const blog = new Blog(req.body);
//     blog.save()
//     .then((result)=>{
//         res.redirect('/blogs');
//     })
//     .catch((err)=>console.log(err))
// });



// app.get('/blogs/:id', (req,res)=>{
//     const id = req.params.id
//     Blog.findById(id)
//     .then((result)=>{
//         res.render('details',{blog:result, title:'Blog details'});
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// });

// app.delete('/blogs/:id', (req,res)=>{
//     const id = req.params.id
//     Blog.findByIdAndDelete(id)
//     .then((result)=>{
//         res.json({redirect:'/blogs'})
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// });



// //redirects
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// });

app.use(blogRoutes);

//404 page
app.use((req,res)=>{
    // res.status(404).sendFile('/views/404.html',{ root : __dirname});
    res.status(404).render('404',{title:'404'})
}); //this function should be at the bottom only to avoid mistakes.


