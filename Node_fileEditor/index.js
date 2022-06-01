

const fs=require('fs');


var [fileEditor,operations,content]=process.argv.slice(2);


function readTxt(){
    fs.readFile(`./${fileEditor}`, "utf8",(err,readData)=>{console.log(readData)})
}
switch(operations)
{
        case "read":
        readTxt();
        break;

        case "append":
        fs.appendFile(`./${fileEditor}`,content,"utf8",(err,writeData)=>{(writeData)})
        readTxt(); 
        break;


        case "delete":
            fs.unlink(`./${fileEditor}`,(err)=>{if (err) throw err;console.log("Error In file")})
            break;

        case "create":
            fs.appendFile(`./${fileEditor}`,content,"utf8",(err,createData)=>{(createData)})
            readTxt(); 
             break;

        case "rename":
            fs.rename(`./${fileEditor}`,content,(err)=>{(err)});
            break;

        

        default:console.log("Nothing to do!");
}