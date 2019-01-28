// 1.选一个基准
// 2.遍历数组, 根据基准分为两个子数组
// 3.对两个子数组重复操作1和2, 直到数组不能再分割(剩下1个或0个元素)
// 4.将所有的分割连在一起
// var quickSort = function (arr) {
//   if (arr.length <= 1) {
//     return arr
//   }
//   const middle = Math.floor(arr.length / 2)
//   const pivot = arr.splice(middle, 1)[0]
//   let l = [], r = []
//   arr.forEach(item => {
//     item < pivot ? l.push(item) : r.push(item)
//   })
//   return quickSort(l).concat(pivot).concat(quickSort(r))
// }

const quickSort = (array) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) { //如果左边的索引大于等于右边的索引说明整理完毕
      return
    }
    let i = left
    let j = right
    const baseVal = arr[j] // 取无序数组最后一个数为基准值
    while (i < j) { //把所有比基准值小的数放在左边大的数放在右边
      while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
        i++
      }
      arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
      console.log(1, arr)
      while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
        j--
      }
      arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
      console.log(2, arr)
    }
    arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
    sort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
    sort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
  }
  const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
  sort(newArr)
  return newArr
}

console.log(quickSort([4,7,1,5,3,2,6]))