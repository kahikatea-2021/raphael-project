
const { getFile, writeFile } = require('../fsService')

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

function addToDoList(groupId, data, callback) {
  groupId = Number(groupId)
  getFile( (err, contents) => {
    if (err) {
      callback(err.message)
    } else {
      try {
        const list = JSON.parse(contents).data

        list.find( group => {
          if (group.listId === groupId) {

            const items = group.items

            const newId = items[items.length-1].itemId + 1
            data['itemId'] = newId
            data['complete'] = false

            items.push(data)

            return true
          }

          return false
        })

        const dataToSave = {
          data: list
        }

        writeFile(JSON.stringify(dataToSave), (err, contents) => {
          if (err) {
            callback(err.message)
          } else {
            callback(null, JSON.parse(contents).data)
          }
        })


      } catch (err) {
        callback("Failed to parse")
      }
    }
  })
}

module.exports = {
  getTodoList,
  addToDoList
}
