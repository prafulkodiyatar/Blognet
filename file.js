//node and the file system.

 const fs = require('fs')
//reading files

// fs.readFile('./readfile.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log('praful checking files functions'); 
// // here as file functions are slow, so it requires time but for thata js skips it and continue the execution of other  


//writing files

// fs.writeFile('./readfile.txt','hey guys,i have changed the file text successfullyy',()=>{
//     console.log('file was written');
// });

//  // directories

// if(!fs.existsSync('./assets'))
// {    
//     fs.mkdir('./assets',()=>{
//         console.log('folder created!!!!!');
//     });
// }
// else
// {
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted'); 
//     })
// }

//   //deleting files
// if(fs.existsSync('./deleteme.txt'))
// {
//     fs.unlink('./deleteme.txt',(err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log('file deleted succcc....');
//     })
// }

// // not working i was trying fucking stuff from my side (.just for fun baibee..
// if(!fs.existsSync('./deleteme.txt'))
// {
//     fs.touch('./deleteme.txt',(err)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         console.log('file created succcc....');
//     })
// }
//)


