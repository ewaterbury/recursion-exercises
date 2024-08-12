function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  } else {
    let midpoint = Math.floor(list.length / 2);
    let listA = list.slice(0, midpoint);
    let listB = list.slice(midpoint);
    let splitA = mergeSort(listA);
    let splitB = mergeSort(listB);
    return merge(splitA, splitB);
  }
}

function merge(a, b, arr = []) {
  if (a.length == 0 && b.length == 0) return arr;
  if (a[0] || b[0]) {
    if (a[0] > b[0]) arr.push(b.shift());
    else if (a[0] < b[0]) arr.push(a.shift());
    else if (a[0] && !b[0]) arr.push(a.shift());
    else if (!a[0] && b[0]) arr.push(b.shift());
    else if (a[0] === b[0]) arr.push(a.shift());
  }
  return merge(a, b, arr);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 100]));
