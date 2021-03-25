const { getTodoList } = require("../controller/to-do-list-controller")

test('getTodoList return all the list', (done) => {

  getTodoList((err, data) => {
    console.log(data.data[0].name)
    done()
  })

})
