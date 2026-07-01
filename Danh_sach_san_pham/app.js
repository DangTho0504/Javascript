// 1. Nhận diện các thẻ HTML
const inputTen = document.getElementById("inputTen");
const inputGia = document.getElementById("inputGia");
const inputSoLuong = document.getElementById("inputSoLuong");
const btnThem = document.getElementById("btnThem");
const bodyBang = document.getElementById("danh-sach-sp");

const loiTen = document.getElementById("loiTen");
const loiGia = document.getElementById("loiGia");
const loiSoLuong = document.getElementById("loiSoLuong");

let danhSachSanPham = []
let viTriSua = -1;
// Tạo bảng
function giaoDienBang(){
let chuoiHTML = "";
danhSachSanPham.forEach(function(){
    chuoiHTML += ` 
    <tr>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    `;
});
};

btnThem.addEventListener("click", function(){
const ten = inputTen.value;
const gia = inputGia.value;
const soLuong = inputSoLuong.value;
loiTen.textContent = "";
loiGia.textContent = "";
loiSoLuong.textContent = "";
let hoLe = true;
if (ten === "" ){
    loiTen.textContent = "Bạn chưa nhập tên sản phẩm!";
    hoLe = false;
}
if (gia === "" || gia < 0){
    loiGia.textContent = "Bạn chưa nhập giá hoặc giá < 0";
    hoLe = false;
}
if (soLuong === "" || soLuong <= 0){
    loiSoLuong.textContent = " Bạn chưa nhập hoặc nhập số âm"
    hoLe = false;
}
if (!hoLe){
    return;
}
let thongTin = {
ten: ten,
gia: gia,
soLuong: soLuong
};
danhSachSanPham.push(thongTin);

});