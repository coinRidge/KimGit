var createElements = function (count) {
  var start = new Date();

  for (var i = 0; i < count; i++) {
    var element = document.createElement('div');
    element.appendChild(document.createTextNode('' + i));
    document.body.appendChild(element);
  }

  setTimeout(function () {
    console.log(new Date() - start);
  }, 0);
};

var createElementsWithFragment = function (count) {
  var start = new Date();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < count; i++) {
    var element = document.createElement('div');
    element.appendChild(document.createTextNode('' + i));
    fragment.appendChild(element);
  }

  document.body.appendChild(fragment);

  setTimeout(function () {
    console.log(new Date() - start);
  }, 0);
};

var createElementsWithNone = function (count) {
  var start = new Date()
  var e = document.createElement('div')
  for (var i = 0; i< count; i++) {
    var element = document.createElement('div')
    element.appendChild(document.createTextNode('' + i))
    e.appendChild(element)
  }
  document.body.appendChild(e)
  setTimeout(function () {
    console.log(new Date() - start);
  }, 0);
}

createElementsWithNone(100000)