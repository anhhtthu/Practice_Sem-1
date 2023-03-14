/**
 * BT 1: Viết một function  , chèn phần tử vào một vị trí bất kì trong mảng
 */

function insert(array, position, value) {
  array.splice(position, 0, value);
  return array;
}

var my_array = [10, -5, 6, 8, 7];

console.log(insert(my_array, 1, 100)); // [10, 100, -5, 6, 8, 7]
console.log(insert(my_array, 5, 10000));
console.log(insert(my_array, 0, 8888));

//BT 2:  Viết một function, xóa một phần tử bất kì trong mảng
function remove(array, position) {
  array.splice(position, 1);
  return array;
}
my_array = [10, -5, 6, 7];
console.log(remove(my_array, 1));

// BT 3: Cho mảng một chiều bao gồm các số nguyên, hãy viết hàm tính tổng các số chẵn trong mảng

function sumOfEvenNumbers(array) {
  let sum = 0;
  let arrLength = array.length;
  for (let a = 0; a <= arrLength; a++) {
    if (array[a] % 2 === 0) {
      sum += array[a];
    }
  }
  return sum;
}
console.log(sumOfEvenNumbers([]));
console.log(sumOfEvenNumbers([-1, 1, 2]));
console.log(sumOfEvenNumbers([0, 9, 2, 8, 10, -6, 100]));

// BT 4: Viết một function, với dữ liệu đầu vào là một mảng một chiều ⇒ trả về một mảng mới bao gồm kiểu dữ liệu(data type) của từng phẩn tử trong mảng

function arrayValuesTypes(array) {
  let new_array = [];
  let arrLength = array.length;
  for (let i = 0; i < arrLength; i++) {
    new_array.push(console.log(typeof array[i]));
  }
  // new_array.pop();
  return new_array;
}
// typeof(variable) => kieu du lieu
arrayValuesTypes([1, 2, "null", []]);
// ➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null]);
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]);
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
