//加强版
// const pivot = arr.splice(middle, 1)[0], 性能问题
// 创建了很多新的数组, 空间复杂度增大

let quickSort = function (arr) {
  
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) return
    const pivot = arr[right]
    while (left < right) {
      while (arr.left < pivot && arr[left] < arr[right]) left++
      arr.right = left
      while (arr.right > pivot && arr[left] < arr[right]) right--
      
    }
  }
}