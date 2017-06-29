

'use strict'

var Firebase = require('firebase')
var FS = require('fs')
var _ = require('underscore')

// file that contains all the objects in string format
let inputFile = 'output.json'

let Data = {}
let fBase = {}

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyClSO5bLfc5TFDABP4poXniOrro-Ueh6PA",
  authDomain: "data-chicago.firebaseapp.com",
  databaseURL: "https://data-chicago.firebaseio.com",
  storageBucket: "data-chicago.appspot.com",
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);
const dbRef = firebaseApp.database()


let allData = {
  '0': [],
  '1': [],
  '2': [],
  '3': [],
  '4': [],
  '5': [],
  '6': [],
  '7': [],
  '8': [],
  '9': [],
  '10': [],
  '11': []
}

let monthMap = {
  '0' : 'january',
  '1' : 'february',
  '2' : 'march',
  '3' : 'april',
  '4' : 'may',
  '5' : 'june',
  '6' : 'july',
  '7' : 'august',
  '8' : 'september',
  '9' : 'october',
  '10' : 'november',
  '11' : 'december'
}

fBase.addKey = (data) => {
  dbRef.ref('data').child('2015').child(data.month).set(data.obj, (error) => {
    if(error){
      console.log('error posting the data', data.month)
    } else {
      console.log("no error was found posting the data", data.month)
    }
  })
}

// gets all the data from the file and puts it in a json object
Data.getFileToJSONData = () => {
  let jsonObject = JSON.parse(FS.readFileSync(inputFile, 'utf8'))

  return jsonObject
}

Data.organizeByMonth = (jsonObject) => {

  _.map( jsonObject,(content) => {
    _organizeByMonth(content)
  })

  // helper function
  function _organizeByMonth(data){
    if(data['date'] == null) {return}
    //console.log('content', new Date(data['date']).getMonth(), data['date'])
    let month = new Date(data['date']).getMonth()
    allData[month.toString()].push(data)
  }
}

Data.addToDB = () => {
  let arr = []
  for(let i = 0; i < 12; i++){
    arr.push(i.toString())
  }

  for(let i = 0; i < 12; i++){
    let str = arr[i].toString()
    let t = {}
    t.month = monthMap[str]
    t.obj =  allData[str]

    // adding to the database
    fBase.addKey(t)
  }
}

function beginAll(){
  Data.organizeByMonth(Data.getFileToJSONData())
  Data.addToDB()
}

(() => {
  beginAll()
})();

function endProgram(){
  process.kill();
}
