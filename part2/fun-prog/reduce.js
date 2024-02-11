/**
 * @file Third example of the Functional programming in JavaScript youtube
 * video series. This file contains the example of the reduce higher order
 * function.
 */

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
]

const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

// const totalAmount = 0
// for (let i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount

console.log('Total amount: ', totalAmount)
