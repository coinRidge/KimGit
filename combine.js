var combine = (arr, k) => {
  var results = []
  const len = arr.length
  function dfs (step, result) {
    if (result.length === k) {
      results.push(result)
      return
    }
    for (let i = step; i<len; i++) {
      dfs(i+1, result.concat(arr[i]))
    }
  }
  dfs(0, [])
  return results
}
combine([1,2,3,4], 2)