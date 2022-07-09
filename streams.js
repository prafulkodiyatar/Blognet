
//     ///  streams  :
// start using data , before it has finished loading.

const fs = require('fs');

const readstream = fs.createReadStream('./streamstest.txt',{encoding:'utf-8'});

const writestream=fs.createWriteStream('./writestream.txt')

// readstream.on('data',(chunk)=>{
//     console.log('\n-----------------------------------------------\n');
//     console.log(chunk);
//     writestream.write('\nNEW CHUNK\n');
//     writestream.write(chunk);
// });


readstream.pipe(writestream);



