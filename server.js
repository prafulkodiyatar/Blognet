// creating server manually.
// const http = require('http');
 

// const fs= require('fs');

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);

    //set header content type
    // res.setHeader('content-Type','text/html');
    // res.write('<h1>hello, world</h1>');
    // fs.readFile('./views/index.html',(err,data)=>
    // {
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         res.write(data);
            
    //     }
    //     res.end();
    // })

    // let path = './views/';
    // switch(req.url) {
    //     case '/':
    //         path+='index.html';
    //         res.statusCode = 200; //200-everything ok
    //         break;
    //     case '/about':
    //         path+='about.html';
    //         res.statusCode = 200;
    //         break;
    //     case '/about-blah':
    //         res.statusCode = 301; //response moved
    //         res.setHeader('Location','/about');
    //         res.end()
    //         break;
    //     default:
    //         path+='404.html';
    //         res.statusCode = 404; //not found,

            // similarly ,500 - server error and 301 - response moved
//             break;
//     }


//     //send an html page back.

//     fs.readFile(path,(err,data)=>
//     {
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.write(data);
            
//         }
//         res.end();
//     })

// });

// server.listen(3000,'localhost',()=>{
//     console.log('listening for requists on port 3000');
// })



//    //using lodash

const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// const server = http.createServer((req,res)=>{
    //lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(()=>{
        console.log('hello');
    });
    greet();
    greet();
// })