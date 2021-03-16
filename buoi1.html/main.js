//bai 1 buổi 10
function thang() {
  var date = new Date();
  console.log(date.getDate());
  var m = date.getMonth() + 1;
  if (m < 1 || m > 12) {
    return;
  }
  if (m <= 3) {
    return `Thang ${m} la mua xuan`;
  } else if (m <= 7) {
    return `Thang ${m} la mua he`;
  } else if (m <= 9) {
    return `Thang ${m} la mua thu`;
  } else if (m <= 12) {
    return `Thang ${m} la mua xuan`;
  }
}

//bai5
function translate(language) {
    switch (language) {
        case "French":
            console.log("Bonjour");
            break;
        case "Hawaiian":
            console.log("Hui");
            break;
        case "Germany":
            console.log("Hallo");
            break;
        case "Italy":
            console.log("Ciao");
            break;
        case "Hawaiian":
            console.log("Croatia");
            break;
        default:
            console.log("Xin chào");
    }
}


//bai snt
// function kiem_tra_snt(n) {
//     var flag = true;
//     if (n < 2) {
//         flag = false;
//     } else if (n == 2) {
//         flag = true;
//     } else if (n % 2 == 0) {
//         flag = false;
//     } else {
        
//         for (var i = 3; i < n - 1; i += 2) {
//             if (n % i == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if (flag == true) {
//         document.write(n + " là số nguyên tố <br/>");
//     } else {
//         document.write(n + " không phải là số nguyên tố <br/>");
//     }
// }
//baisnt
// function soNguyenTo(N) {
//     if (N < 2) {
//         console.log(`${N} không là số nguyên tố`);
//         return;
//     }
//     if (N === 2) {
//         console.log(`${N} là số nguyên tố`);
//     } else if (N > 2 && (N % 2 === 0 || N % Math.sqrt(N) === 0)) {
//         console.log(`${N} không là số nguyên tố`);
//     } else {
//         console.log(`${N} là số nguyên tố`);
//     }
// }
// soNguyenTo();




