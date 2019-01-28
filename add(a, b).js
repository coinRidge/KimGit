var add = function (x, y) {
  if (typeof y === 'undefined') {
    return function (z) {
      return x + z
    }
  } else {
    return x + y
  }
}

console.log(add(1, 2))
console.log(add(1)(2))