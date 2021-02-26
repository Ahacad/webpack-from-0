export default function add(a, b) {
  let i = a.length - 1,
    j = b.length - 1;

  let carry = 0;
  let res = "";
  while (i >= 0 || j >= 0) {
    let x = 0,
      y = 0,
      sum;
    if (i >= 0) {
      x = a[i] - "0";
      i--;
    }
    if (j >= 0) {
      y = b[j] - "0";
      j--;
    }
    sum = x + y + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    res = sum + res;
  }
  if (carry) {
    res = carry + res;
  }
  return res;
}

// add("999", "1")
// add("1", "999")
