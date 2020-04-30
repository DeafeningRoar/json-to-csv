const {Parser} = require('json2csv')
const fs = require('fs')

const dataToMap = require('./dataToMap.json')

;(function mapToCSV() {
  const parser = new Parser({flatten: true, includeEmptyRows: true})
  const csv = parser.parse(dataToMap)
  fs.writeFileSync('./output/result.csv', csv)
})()
