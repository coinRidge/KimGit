let debounce = (fn, wait) => {
  let timeId = 0
  return function (...args) {
    if (timeId) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}

let throttle = (fn, wait) => {
  let lastTime = 0
  return function (...args) {
    let now = +new Date()
    if (now - lastTime > wait) {
      lastTime = now
      fn.apply(this, args)
    }
  }
}