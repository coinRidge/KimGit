var Parent = function (a) {
  this.a = a
}

Parent.prototype.getA = function () {
  return this.a
}

var Child = function (a) {
  Parent.call(this, a)
}

Child.prototype = new Parent()

// Child.prototype = Object.create(Parent.prototype)
// Child.prototype.constructor = Child

const c = new Child(1)