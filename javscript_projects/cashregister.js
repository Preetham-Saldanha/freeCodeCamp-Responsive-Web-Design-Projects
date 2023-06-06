function getChange(value, diff, unit) {
  let ans = 0;
  while (diff >= unit && value > 0 && value - unit >= 0) {
    value = Number.parseFloat((value - unit).toFixed(2));
    diff = Number.parseFloat((diff - unit).toFixed(2));
    // console.log(diff, ans, value);
    // ans += unit;
    ans = Number.parseFloat((ans + unit).toFixed(2));
  }

  return { diff, ans };
}

function checkCashRegister(price, cash, cid) {
  //   let change = cash-price;
  let total = 0;
  cid.forEach((ele) => {
    console.log(total, ele[1]);
    total += ele[1];
  });
  console.log(total);
  let diff = cash - price;
  let result = { status: "OPEN", change: [] };

  for (let i = cid.length - 1; i >= 0; i--) {
    let currentAns;
    switch (i) {
      case 8:
        currentAns = getChange(cid[i][1], diff, 100);
        break;
      case 7:
        currentAns = getChange(cid[i][1], diff, 20);
        break;
      case 6:
        currentAns = getChange(cid[i][1], diff, 10);
        break;
      case 5:
        currentAns = getChange(cid[i][1], diff, 5);
        break;
      case 4:
        currentAns = getChange(cid[i][1], diff, 1);
        break;
      case 3:
        currentAns = getChange(cid[i][1], diff, 0.25);
        break;
      case 2:
        currentAns = getChange(cid[i][1], diff, 0.1);
        break;
      case 1:
        currentAns = getChange(cid[i][1], diff, 0.05);
        break;
      case 0:
        currentAns = getChange(cid[i][1], diff, 0.01);
        break;
    }
    if (currentAns.ans !== 0) {
      result.change.push([cid[i][0], currentAns.ans]);
    }
    diff = currentAns.diff;
    // total = total + currentAns.ans;
  }
  console.log(total);
  if (diff > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (total === cash - price) {
    result.status = "CLOSED";
    result.change = [...cid];
  }
  return result;
}

const ans = checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

console.log(ans);
