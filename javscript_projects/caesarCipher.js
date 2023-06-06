function rot13(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (/\w/.test(str[i])) {
      let num = String.fromCharCode(((str.charCodeAt(i) + 13 - 65) % 26) + 65);
      ans = ans + num;
      console.log(str.charCodeAt(i) - 13);
    } else {
      ans += ch;
    }
  }

  console.log(ans);
  return ans;
}

rot13("SERR PBQR PNZC");
