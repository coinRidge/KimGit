async function f1() {
  await console.log(1);
  console.log(2);
}
f1();
new Promise(resolve => {
  console.log('promise')
    resolve()
  })
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

async function async1() {
  await async2()
  debugger
  console.log('2')
}
async function async2() {
  console.log('1')
  debugger
}
async1()

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    debugger
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })
