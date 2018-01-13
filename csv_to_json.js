const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

const csvFilePath = path.join(__dirname, 'customer-data.csv' )

const writeData = (csvPath, callback) =>{
    
    let obj = []
    csv()
    .fromFile(csvPath)
    .on('json', (jsonObj)=>{
        obj.push(jsonObj)
    })
    .on('done',(error)=>{
        if(error){
            console.log(`Error: ${error}`)
        }else callback(obj)
    })
}

writeData(csvFilePath, (data) => {
    fs.writeFile(path.join(__dirname, 'customer-data.json' ), JSON.stringify(data),  function (error) {
        if (error) return console.error(error)
    )
})