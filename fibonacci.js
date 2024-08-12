function fibs(n) {
  if (n === 0) return 0;
  let fibSeq = [0, 1];
  for (let i = 0; i < n; i++) {
    fibSeq.push(fibSeq[i] + fibSeq[i + 1]);
  }
  return fibSeq;
}

function fibsRec(n, arr = [0, 1]) {
  if (n <= 1) return [0];
  if (arr.length == n + 1) return arr;
  else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(n, arr);
  }
}
console.log(fibs(8));
console.log(fibsRec(8));
