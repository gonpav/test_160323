//console.log(__filename);
//console.log(__dirname);

function log(msg){
    //console.log('Log: ' + msg);
    console.log(`Log: ${msg}`);
}

module.exports.log = log; // exports object. Will be called as obj.log('..')
//module.exports = log;  // exports function. Will be called as obj('..')

//console.log(module);