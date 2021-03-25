const fs = require('fs')
const path = require('path')

function getFile(callback, filename = "to-do-list.json", error = console.error) {
  fs.readFile(path.join(__dirname, filename), (err, contents) => {
    if (err) {
      error(err.message)
      callback(new Error("File not found"))
    } else {
      callback(null, contents)
    }
  })
}

function writeFile(contents,callback,filename = "to-do-list.json", error = console.error) {
  fs.writeFile(path.join(__dirname, filename), contents, "utf8",(err)=>{
    if(err){
      error(err.message)
      callback(new Error("Unable to modify"))
    }else {
      callback(null,contents)
    }
  })
}

module.exports = {
  getFile,
  writeFile
}
