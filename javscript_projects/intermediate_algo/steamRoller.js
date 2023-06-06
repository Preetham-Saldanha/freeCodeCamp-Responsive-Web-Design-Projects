function flatten(arr, i) {
  let ans = [];
  if (Array.isArray(arr[i])) {
    if (arr[i].length !== 0) ans = [...flatten(arr[i], 0)];
  } else {
    ans.push(arr[i]);
  }
  if (i === arr.length - 1) return ans;
  return [...ans, ...flatten(arr, i + 1)];
}

function steamrollArray(arr) {
  const ans = flatten(arr, 0);
  console.log(ans);
  return ans;
}

steamrollArray([1, [], [3, [[4]]]]);
