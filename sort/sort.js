// 为了面试, 几种常见算法简单好理解的写法, 不考虑空间复杂度之类的, 以升序为例, 概念来自百度
// 边界问题, 注意两点即可
// 1. 数组起始index为0
// 2. 数组长度为<=1即为有序

var a = [9,4,7,1,8,5,3,2,6,2]
function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]]
}

// 1. 冒泡排序
// 它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素已经排序完成。

// 一. 遍历, 前后比较, 前边的大, 就交换 (由于相同的值不会交换位置, 稳定的排序)
// 二. 对前n-1项重复一 (每次都将未排序部分的最大值换到了最后)
const bubbleSort = array => {
  const len = array.length
  for (let t = 0; t < len-1; t++){ // 前len-t项是无序区, 后t项为有序区
    for (let i = 0; i < len-t; i++) { //遍历无序区, 将最大值依次交换至无序区末尾
      if (array[i] > array[i+1]) {
        swap(array, i, i+1)
      }
    }
  }
  return array
}

// 2. 选择排序
// 它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 以此类推，直到全部待排序的数据元素排完。

// 一. 遍历, 前后比较, 记下较大值的index, 遍历结束即获得(选出)最大值的index, 交换至无序区最后(如例子中的两个2, 先碰到第一个2放到了无序区最后, 交换了位置, 不稳定排序)
// 二. 对前n-1项重复一

const selectSort = array => {
  const len = array.length
  for (let t = 0; t < len-1; t++) { // 前len-t项是无序区, 后t项为有序区
    var maxValueIndex = 0
    for (let i = 0; i < len-t; i++){ //遍历无序区, 获得最大值的index, 交换至无序区末尾
      if (array[i] > array[maxValueIndex]) {
        maxValueIndex = i
      }
    }
    swap(array, maxValueIndex, len-t-1)
  }
  return array
}

// 3. 插入排序
// 每步将一个待排序的记录，按其关键码值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。

// emmm, 这里其实是写了个"反着"的冒泡排序, 前t项为有序区, 后len-t为无序区, 每次选无序区的开头, 往前交换(依次从无序区取值, 插入有序区, 稳定排序)
const insertSort = array => {
  const len = array.length
  for (let t = 1; t < len; t++) { //起始, 第0项已经为有序区, 遍历无序区往前交换
    for (let i = t; i >= 0; i--){ //前t项为无序区, 将较小值从后往前交换
      if (array[i-1] > array[i]) {
        swap(array, i-1, i)
      }
    }
  }
  return array
}

// 4. 快速排序
// 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，
// 然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

// 一 选一个pivot(标志), 比p小的放左边, 比p大的放右边
// 二 对分成的两组重复操作一
// 三 concat起来
const quickSort = array => {
  if (array.length <= 1) { // 有序了, 这部分结束
    return array
  }
  const len = array.length,
        pivot = array.splice(len-1, 1), // 随便选一个p, 并剔除数组, splice选最后一个快一点..., 选最后一个(这里已经可以看出, 不稳定...)
        l = [], r = []
  array.forEach(item => {
    item < pivot ? l.push(item) : r.push(item) //小的放左边, 大的放右边
  });
  return quickSort(l).concat(pivot).concat(quickSort(r)) //从小到大concat起来
}

// 5. 堆排序
// 指利用堆这种数据结构所设计的一种排序算法
// 完全二叉树, 大顶堆(每个父节点都比子节点打, 那根节点就是最大的), 请百度一下看看图, 方便理解

// 感觉这个还是冒泡排序的思路, 首先, 还是分为无序区和有序区, 区别就是每次把无序区搞成大顶堆, 而不是通过依次交换来得到最大值
// 既然无序区是大顶堆, 每次把根节点放在有序区之前就行了

// 一. 初始化一个大顶堆, 得到最大值(根节点, array[0]), 将根节点与最后一个值交换, array[len-1]变成了有序区
// 二. 继续把前len-1项搞成大顶堆, 得到最大值, 即重复操作一

// 所以... 我们需要一个"搞出大顶堆"的函数, 然后交换值就完事儿了

const shiftDown = (array, i, len) => { //将节点i为根的树, 调整为大顶堆, len就是无序区的长度
  const p = array[i] //父节点
  for (let j = 2*i+1; j<len; j = 2*j+1) {
    if (j+1<len && array[j] < array[j+1]){
      j++ //取两个子节点中较大的
    }
    if (array[j] > p) { //如果父节点值小, 就交换, 换完不能保证该子树为大顶堆, 继续; 否则跳出(可以看出和冒泡排序差不多... 稳定排序)
      swap(array, i, j)
      i = j //交换后, 父节点下移
    } else {
      break
    }
  }
}
const heapSort = array => {
  const len = array.length
  //1.初始化大顶堆
  //从最后一个非叶子节点(len/2-1)开始(毕竟叶子结点已经是个大顶堆了), 从下往上, 将每个子树调整为大顶堆
  for (let i = Math.floor(len/2-1); i>=0; i--) {
    shiftDown(array, i, len)
  }
  for (let i = len-1; i>0; i--) {
    swap(array, 0, i) // 将根节点(最大值)交换到最后
    shiftDown(array, 0, i) // 无序区搞成大顶堆, 以获得最大值
  }
  return array
}