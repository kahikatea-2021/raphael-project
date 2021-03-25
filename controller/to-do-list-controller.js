
const { getFile } = require('../fsService')

function getTodoList(callback) {
  getFile( (err, contents) => {
    if (err) {
      callback(err.message)
    } else {
      try {
        const parsedData = JSON.parse(contents)
        callback(null, parsedData.data)
      } catch (err) {
        callback("Failed to parse")
      }
    }
  })
}

module.exports = {
  getTodoList
}
