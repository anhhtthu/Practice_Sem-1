import { products } from "./data.js";

//sua bai 1
function biggerThan50(arr) {
  let lengthArr = arr.length;
  for (let i = 0; i < lengthArr; i++) {
    if (arr[i].price >= 50) {
      console.log(arr[i]);
    }
  }
}
biggerThan50(products);

//bai 2
function higherThan4(arr) {
  let lengthRate = arr.length;
  for (let a = 0; a < lengthRate; a++) {
    if (arr[a].rating.rate >= 4) {
      console.log(arr[a]);
    }
  }
}
higherThan4(products);

//bai 3
function cateWomen(arr) {
  let lengthCate = arr.length;
  for (let b = 0; b < lengthCate; b++) {
    if (arr[b].category == "women's clothing") {
      console.log(arr[b]);
    }
  }
}
cateWomen(products);

//bai 4
function categories(arr) {
  let newArr = [];
  let categoriesLength = arr.length;
  for (let c = 0; c < categoriesLength; c++) {
    if (!newArr.includes(arr[c].category)) {
      newArr.push(arr[c].category);
    }
  }
  return newArr;
}
