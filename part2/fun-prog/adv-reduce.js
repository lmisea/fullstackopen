/**
 * @file Fourth example of the Functional programming in JavaScript youtube
 * video series. This file contains the advanced example of the reduce higher
 * order function.
 */

import fs from 'fs'

const output = fs
  .readFileSync('sales.txt', 'utf8')
  .trim()
  .split('\n')
  .map((line) => line.split(','))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      item: line[1],
      price: line[2],
      quantity: line[3],
    })
    return customers
  }, {})

console.log('Sales data: ', output)
