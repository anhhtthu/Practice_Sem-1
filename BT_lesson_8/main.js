//homework 1
function minuteCall(number) {
  let soCuoc = 0;
  if (number >= 50) {
    soCuoc = 600 * number;
    console.log("so tien gia dinh phai tra la: ", soCuoc + 25000);
  } else if (number >= 150) {
    soCuoc = 400 * number;
    console.log("so tien gia dinh phai tra la: ", soCuoc + 25000);
  } else if (number >= 200) {
    soCuoc = 200 * number;
    console.log("so tien gia dinh phai tra la: ", soCuoc + 25000);
  }
}
minuteCall(60);

//homework 2 Viết function Javascript ⇒ tính tổng các `số chẵn` từ 1 tới `n` _(Gợi ý sử dụng vòng lặp)
function lastNum(number) {
  let tongSoChan = 0;
  for (m = 1; m < number; m++) {
    if (m % 2 === 0) {
      tongSoChan += m;
      console.log("tong so chan la: ", tongSoChan);
    }
  }
}
lastNum(8);
