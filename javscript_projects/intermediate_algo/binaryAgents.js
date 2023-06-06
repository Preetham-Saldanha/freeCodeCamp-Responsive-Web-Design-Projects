function converter(letter) {
  let place = 1;
  let code = 0;
  for (let i = letter.length - 1; i >= 0; i--) {
    let num = parseInt(letter[i]);
    if (num === 1) code += place;
    place *= 2;
  }
  // console.log(code)
  return String.fromCharCode(code);
}

function binaryAgent(str) {
  let ans = "";
  str.split(" ").forEach((letter) => {
    ans += converter(letter);
  });
  console.log(ans);
  return ans;
}
