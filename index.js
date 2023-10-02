/*

[1, 1, 1] => [1, 1 ,1, 3, 5, 9, 17, 31, ...]
[0, 0, 1] => [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

*/

function tribonacci(signature, n) {
  for (let i = 0; signature.length < n; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }

  return signature.splice(0, n);
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 0, 0], 10));
console.log(tribonacci([0, 0, 0], 10));
console.log(tribonacci([1, 2, 3], 10));
console.log(tribonacci([3, 2, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([300, 200, 100], 0));
