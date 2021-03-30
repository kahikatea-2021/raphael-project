
const { getFile, writeFile } = require('../fsService')

function getTodoList(callback) {
  getFile((err, contents) => {
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

function itemStatus(groupId, data, callback) {
  let { complete, itemId } = data
  itemId = Number(itemId)
  groupId = Number(groupId)
  getFile((err, contents) => {
    if (err) {
      callback(err.message)
    } else {
      const list = JSON.parse(contents).data

      list.find(group => {
        if (group.listId === groupId) {
          const items = group.items

          items.find(item => {
            if (item.itemId === itemId) {
              item.complete = complete === 'false' ? true : false
              return true
            }
            return false
          })
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
    }
  })
}

function addToDoList(groupId, data, callback) {
  groupId = Number(groupId)
  getFile((err, contents) => {
    if (err) {

      callback(err.message)
    } else {
      try {
        const list = JSON.parse(contents).data


        list.find(group => {
          if (group.listId === groupId) {
            const items = group.items

            const newId = items.length === 0 ? 1 : items[items.length - 1].itemId + 1
            data['itemId'] = newId
            data['complete'] = false
            data['ownerId'] = groupId
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
  addToDoList,
  itemStatus
}
