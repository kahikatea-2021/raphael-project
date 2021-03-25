const { writeFile, getFile } = require("../fsService");

function addGroup(data,callback){
 getFile((err,contents)=>{
   if(err){
     callback(err.message)
   } else {
    try {
      const parsedData = JSON.parse(contents)
      const list = parsedData.data
      list.push(data)
      const dataToSave = {
        data: list
      }
     writeFile(JSON.stringify(dataToSave),(err,contents)=>{
      if(err){
        callback(err.message)
      } else {
        callback(null,JSON.parse(contents).data)
      }
     })
     
      callback(null)
    } catch (err) {
      callback("Failed to parse")
    }
   }
 })

}

module.exports = {
  addGroup
}
