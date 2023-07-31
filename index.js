var daySoNguyen = [];

function nhapSoNguyenvaoDay() {
    var index = document.getElementById("so-nguyen-n").value * 1;
    if (index == 0) {
        index = Math.floor(Math.random() * 15);
    }
    daySoNguyen.push(index);
    document.querySelector("#so-nguyen-n").value = "";
    document.getElementById("daySoDaNhap").innerHTML = `<h3>Dãy số đã nhập là: ${daySoNguyen}</h3>`
}
var daySoThuc = [];
function nhapSoThucvaoDay() {
    var index = document.getElementById("so-thuc-input").value * 1;
    if (index == 0) {
        index = (Math.random() * 20).toFixed(1);
        console.log("index: ", index);
    }
    if (index - Math.floor(index) == 0){
        index = Math.floor(index);
    }
    daySoThuc.push(index);
    document.querySelector("#so-thuc-input").value = "";
    document.getElementById("soThucDaNhap").innerHTML = `<h5>Dãy số thực đã nhập là: ${daySoThuc}</h5>`
    document.getElementById("daySoThucDaNhap").innerHTML = `<h3>Dãy số thực đã nhập là: ${daySoThuc}</h3>`
}
function timDaySoDuong(array) {
    var daySoOutput = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            daySoOutput.push(array[i]);
        }
    }
    return daySoOutput;
}
function timDaySoAm(array) {
    var daySoOutput = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            daySoOutput.push(array[i]);
        }
    }
    return daySoOutput;
}
function tongSoDuong() {
    var sum = 0;
    var daySoDuong = timDaySoDuong(daySoNguyen);
    for (i = 0; i < daySoDuong.length; i++) {
        sum = sum + daySoDuong[i];
    }
    console.log("sum: ", sum);
    document.getElementById("result").innerHTML = `<h3>Tổng số dương từ dãy số đã nhập là: ${sum}</h3>`
    document.getElementById("result").classList
}
function demSoDuong() {
    var count = 0;
    var daySoDuong = timDaySoDuong(daySoNguyen);
    for (i = 0; i < daySoDuong.length; i++) {
        count++;
    }
    console.log("count: ", count);
    document.getElementById("result").innerHTML = `<h3 class="py-4">Số lượng số dương từ dãy số đã nhập là: ${count}</h3>`
}
function timSoNhoNhat() {
    var min = daySoNguyen[0];
    for (i = 0; i < daySoNguyen.length; i++) {
        if (min > daySoNguyen[i]) {
            min = daySoNguyen[i];
        }
        console.log("min: ", min);
    }
    document.getElementById("result").innerHTML = `<h3 class="py-4">Số nhỏ nhất từ dãy số đã nhập là: ${min}</h3>`
}
function timSoDuongNhoNhat() {
    var daySoDuong = timDaySoDuong(daySoNguyen);
    console.log("daySoDuong: ", daySoDuong);

    var min = daySoDuong[0];
    for (i = 0; i < daySoDuong.length; i++) {
        if (min > daySoDuong[i]) {
            min = daySoDuong[i];
        }
        console.log("min: ", min);
    }
    document.getElementById("result").innerHTML = `<h3 class="py-4">Số nhỏ nhất từ dãy số đã nhập là: ${min}</h3>`
}
function timSoChanCuoiCung() {
    var output = -1;
    for (i = 0; i < daySoNguyen.length; i++) {
        if (daySoNguyen[i] % 2 == 0) {
            output = daySoNguyen[i];
        }
        console.log("output: ", output);
    }
    if (output == -1) {
        document.getElementById("result").innerHTML = `<h3 class="py-4">Không có số chẵn trong chuỗi. Kết quả trả về là: ${output}</h3>`
    }
    else {
        document.getElementById("result").innerHTML = `<h3 class="py-4">Số chẵn cuối cùng từ dãy số đã nhập là: ${output}</h3>`
    }
}
function nhapInputViTri() {
    var vitri = [];
    var vitri1 = document.querySelector("#vitri1").value * 1;
    var vitri2 = document.querySelector("#vitri2").value * 1;
    console.log("vitri1: ", vitri1);
    console.log("vitri2: ", vitri2);
    if (vitri1 > daySoNguyen.length + 1
        || vitri2 > daySoNguyen.length + 1
        || vitri1 <= 0
        || vitri2 <= 0) {
        alert("Bạn đã nhập giá trị chưa phù hợp, vui lòng nhập lại")
    }
    vitri.push(vitri1 - 1, vitri2 - 1);
    console.log("vitri: ", vitri);
    document.getElementById("viTriDaNhap").innerHTML = `<h5>Bạn đã chọn đổi giá trị từ vị trí thứ ${vitri[0] + 1} và thứ ${vitri[1] + 1}.</h5>`
    return vitri;
}
function doiViTri2GiaTri() {
    var daySoDoiCho = [];
    var vitritraodoi = nhapInputViTri();
    var middleNumberX = daySoNguyen[(vitritraodoi[0] * 1)];
    var middleNumberY = daySoNguyen[(vitritraodoi[1] * 1)];

    console.log("vitritraodoi: ", vitritraodoi);
    console.log("middleNumberX: ", middleNumberX);
    console.log("middleNumberY: ", middleNumberY);

    for (i = 0; i < daySoNguyen.length; i++) {
        if (i == vitritraodoi[1]) {
            daySoDoiCho.push(middleNumberX);
        }
        else if (i == vitritraodoi[0]) {
            daySoDoiCho.push(middleNumberY);
        }
        else {
            daySoDoiCho.push(daySoNguyen[i]);
        }
    }
    document.getElementById("result").innerHTML = `<h3>Dãy số sau khi đổi chỗ 2 giá trị là ${daySoDoiCho}</h3>`

}
function sapXepTangDan() {
    var daySoTangDan = daySoNguyen;
    for (i = 0; i < daySoTangDan.length; i++) {
        for (j = 0; j < daySoTangDan.length; j++) {
            var number1 = daySoTangDan[i];
            var number2 = daySoTangDan[j];
            if (number1 < number2) {
                daySoTangDan[i] = number2;
                daySoTangDan[j] = number1;
            }
        }
        console.log("daySoTangDan: ", daySoTangDan);
    }
    document.getElementById("result").innerHTML = `<h3>Dãy số theo thứ tự tăng dần là ${daySoTangDan}</h3>`;
}
function timSoNguyenToDauTien() {
    var soNguyenToDauTien = -1;
    var daySoNguyenTo = [];
    for (i = 0; i < daySoNguyen.length; i++) {
        var checkSoNguyenTo = true;
        if (daySoNguyen[i] <= 1) {
            checkSoNguyenTo = false;
            console.log("checkSoNguyenTo: ", checkSoNguyenTo);
        }
        for (j = 2; j < daySoNguyen[i]; j++) {
            if (daySoNguyen[i] % j == 0) {
                checkSoNguyenTo = false;
                console.log("checkSoNguyenTo: ", checkSoNguyenTo);
            }
        }
        if (checkSoNguyenTo == true) {
            daySoNguyenTo.push(daySoNguyen[i]);
            console.log("daySoNguyenTo: ", daySoNguyenTo);
            soNguyenToDauTien = daySoNguyenTo[0];
        }
    }
    if (checkSoNguyenTo == true) {
        document.getElementById("result").innerHTML = `<h3>Dãy số trên có số nguyên tố đầu tiên là ${soNguyenToDauTien}</h3>`;
    }
    else {
        document.getElementById("result").innerHTML = `<h3>Dãy số trên không có số nguyên tố. Kết quả trả về là:${soNguyenToDauTien} </h3>`;
    }
}
function demSoNguyen() {
    var count = 0;
    for (i = 0; i < daySoThuc.length; i++) {
        if (Number.isInteger(daySoThuc[i])) {
            count++;
        }
    }
    if (count == 0) {
        document.getElementById("result").innerHTML = `<h3>Dãy số vừa nhập không có số nguyên.</h3>`
    }
    else {
        document.getElementById("result").innerHTML = `<h3>Dãy số vừa nhập có ${count} số nguyên.</h3>`
    }
}
function soSanhSoLuongSoAmDuong() {
    var daySoAm = timDaySoAm(daySoNguyen);
    var daySoDuong = timDaySoDuong(daySoNguyen);

    console.log("daySoAm: ", daySoAm);
    console.log("daySoDuong: ", daySoDuong);
    if (daySoAm.length < daySoDuong.length) {
        document.getElementById("result").innerHTML = `<h3>Dãy số trên có nhiều số dương hơn</h3>`;
    }
    else if (daySoAm.length == daySoDuong.length) {
        document.getElementById("result").innerHTML = `<h3>Dãy số trên có số lượng số âm và số dương bằng nhau</h3>`;
    }
    else {
        document.getElementById("result").innerHTML = `<h3>Dãy số trên có nhiều số âm hơn</h3>`;
    }
}