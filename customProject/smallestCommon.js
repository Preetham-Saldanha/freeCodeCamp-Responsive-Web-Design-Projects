function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  //   console.log(min, max);

  let isFirstTime = true;
  let nums = [];
  let result = 1;
  let i = 2;

  while (true) {
    let isFactor = false;
    let flag = false;
    let check = [];

    for (let j = min; j <= max; j++) {
      let curr;
      //   console.log(isFirstTime);

      if (isFirstTime) {
        // console.log("hi");
        // console.log(nums, curr);
        curr = j;
        if (curr % i === 0) {
          curr = curr / i;
          isFactor = true;
        }
      } else {
        curr = nums[j - min];
        if (curr % i === 0) {
          nums[j - min] = curr / i;
          isFactor = true;
        }
        console.log(nums);
        // console.log(curr);
      }

      if (curr != 1) {
        // console.log("here", curr, flag);
        flag = true;
      } else {
        check.push(curr);
      }

      if (isFirstTime) {
        nums.push(curr);
        // console.log(j === max);
        if (j === max) {
          //   console.log("ys");
          isFirstTime = false;
        }
      }

      console.log(check, "chekiuuuh", flag, nums, curr);
    }

    if (!isFactor) {
      i++;
      //   console.log("exec", i);
    } else {
      result *= i;
    }
    console.log("before", flag);
    if (!flag) {
      console.log("after", flag);
      break;
    }
  }
  return result;
}

console.log(smallestCommons([1, 5]));
