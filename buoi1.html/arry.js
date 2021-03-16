let array=[1,2,3];
let names;
names = ["an", "Anh", "Hieu","Thịnh"]
names.length;//đếm số phần tử của mảnng
//lấy phần tử theo index
names[3]
console.log(names[2])

//duyệt mảng 
for (let i = 0; i < names.length; i++){
    console.log("tôi tên là ${names[i]");
}

//Phương thức với mảng
//thêm phân tử
names.push("quỳnh");// dùng hàm push đê thêm mới một phần tử vào mảng
console.log(names)

//lấy phần tử khỏi mảng
//array.pop() dung hàm pop để lấy ra (xóa) một phần tử cuối mảng


//cho 1 số nguyên. kiểm tra nếu có phần tử bé hơn 0 thì thay thế nó bằng 0

function checkarray(arr) {
    for (let i in arr) {
        if (arr[i] < 0){
            arr[i]=0
        }
    }
    return
}

function drawSquare(n) {
    for (let i = 0; i <= n; i++){
        for (let j = 0; j <= n; j++) {
            console.log("*")
        }
    }      
}
    