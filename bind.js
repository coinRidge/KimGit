Function.prototype.bind = function (toThis) {
  if (typeof this !== 'function') {
    throw new TypeError ('not function')
  }

  var fn = this
  var args = Array.from(arguments).slice(1)
  var fbound = function () {
    var args1 = args.concat(Array.from(arguments))
    if (this instanceof fbound) {
      return fn.apply(this, args1)
    }
    return fn.apply(toThis, args1)
  }

  var fNop = function() {}
  if (fn.prototype) {
    fNop.prototype = fn.prototype
  }
  fbound.prototype = new fNop()
  return fbound
}