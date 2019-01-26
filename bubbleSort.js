// 对于长度为n的array进行冒泡排序
// 1.遍历数组, 依次比较相邻的两个数, 如果前边的数大于后边的数, 交换位置, 最终将最大的数交换至数组末尾
// 2.对前n-1项重复操作1, 共进行n-1次遍历
function bubbleSort (arr) {
  let len = arr.length
  for (let t = 1; t < len; t++) {
    for (let x = 0; x < len-t; x++){
      if (arr[x] > arr[x+1]) {
        [arr[x], arr[x+1]] = [arr[x+1], arr[x]]
      }
    }
  }
  return arr
}

var i = [3,1,5,7,2,4,9,6,10,8]