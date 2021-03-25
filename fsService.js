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

function writeFile() {
  
}

module.exports = {
  getFile,
  writeFile
}
