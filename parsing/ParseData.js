// this file cleans up the csv files downloaded from the data chicago
// converts csv into json clean data that is going to be used for the DB

'use strict'

var fs = require('fs')
var papa = require('papaparse')

let inputFile = 'Crimes_-_2015.csv'
let outputFile = 'output.json'

fs.readFile(inputFile, (err, data) => {
  if(err) throw err

  let fileData = data.toString()

  papa.parse(fileData, {
    worker:true,
    header: true,
    complete: (results, file) => {
      writeToFile(outputFile, cleanUpData(results.data))
    }
  })
})

// this function cleans up all the data
// creates a new data object to be put on the file
function cleanUpData(data){

  let dataToWriteOnFile = []

  data.forEach((elem) => {
    let toPush = {}
    toPush['block'] = elem['Block']
    toPush['primary_type'] = elem['Primary Type']
    toPush['description'] = elem['Description']
    toPush['location_description'] = elem['Location Description']
    toPush['arrest'] = elem['Arrest']
    toPush['domestic'] = elem['Domestic']
    toPush['year'] = elem['Year']
    toPush['latitude'] = elem['Latitude']
    toPush['longitude'] = elem['Longitude']
    toPush['date'] = elem['Date']

    dataToWriteOnFile.push(toPush)
  })

  return dataToWriteOnFile
}

// takes the data and write it to the file
// the fuction stringifys the object to be stored on the file
function writeToFile(filename, data){
  fs.writeFile(filename, JSON.stringify(data), (err) => {
    if(err) throw err
    console.log("everything successfull")
  })
}
