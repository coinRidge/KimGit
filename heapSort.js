let arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]
const shiftDown = (arr, i, len) => { //将节点i为根的树, 调整为大顶堆
  const p = arr[i] //父节点
  for (let j = 2*i+1; j<len; j = 2*j+1) {
    if (j+1<len && arr[j] < arr[j+1]){
      j++ //取两个子节点中较大的
    }
    if (arr[j] > p) { //如果父节点值小, 就交换; 否则不用继续循环
      swap(arr, i, j)
      i = j //交换后, 父节点下移
    } else {
      break
    }
  }
}
const heapSort = arr => {
  arr = arr.slice(0)
  const len = arr.length
  //1.初始化大顶堆
  //从最后一个非叶子节点开始, 从下往上, 将每个子树调整为大顶堆
  for (let i = Math.floor(len/2-1); i>=0; i--) {
    shiftDown(arr, i, len)
  }
  //2.依次将根节点(最大值)交换到最后, 然后调整剩下的部分为大顶堆
  //3.重复步骤2, 依次将最大值往后移
  for (let i = len-1;i>0;i--) {
    swap(arr, 0, i)
    shiftDown(arr, 0, i)
  }
  return arr
}
heapSort(arr)