// 全是升序, 这周再总结一下
var a = [9,4,7,1,8,5,3,2,6]
function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]]
}

var bubbleSort = function (array) {
  var arr = array.slice(0)
  var len = arr.length
  for (var t = 0; t < len-1; t++){
    for (var i = 0; i < len-t; i++) {
      if (arr[i] > arr[i+1]) {
        swap(arr, i, i+1)
      }
    }
  }
  return arr
}

var selectSort = function (array) {
  var arr = array.slice(0)
  var len = array.length
  for (var t = 0; t < len-1; t++) {
    var maxValueIndex = 0
    for (var i = 0; i < len-t;i++){
      if (arr[i] > arr[maxValueIndex]) {
        maxValueIndex = i
      }
    }
    swap(arr, maxValueIndex, len-t-1)
  }
  return arr
}

var insertSort = function (array) {
  var arr = array.slice(0)
  var len = array.length
  for (var t = 0;t < len;t++) {
    for (var i = t; i >= 0; i--){
      if (arr[i-1] > arr[i]) {
        swap(arr, i-1, i)
      }
    }
  }
  return arr
}

var quickSort = (array) => {
  if (array.length <= 1) {
    return array
  }
  array = array.slice(0)
  const len = array.length,
        pivot = array.splice(len-1, 1),
        l = [], r = []
  array.forEach(item => {
    item < pivot ? l.push(item) : r.push(item)
  });
  return quickSort(l).concat(pivot).concat(quickSort(r))
}