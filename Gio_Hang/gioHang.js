const inputTen = document.getElementById("inputTen");
const inputGia = document.getElementById("inputGia");
const inputSoLuong = document.getElementById("inputSoLuong");
const btnThem = document.getElementById("btnThem");
const bodyBang = document.getElementById("danh-sach-sp");
const tongTien = document.getElementById("tongTien");
const loiTen = document.getElementById("loiTen");
const loiGia = document.getElementById("loiGia");
const loiSoLuong = document.getElementById("loiSoLuong");
const inputGiamGia  =document.getElementById("giamGia");

let danhSachSanPham = [];
let viTriSua = -1;

btnThem.addEventListener("click", function(){
    const ten = inputTen.value;
    const gia = inputGia.value;
    const soLuong = inputSoLuong.value;
    const giam = inputGiamGia.value;
    const tongTien = "";
    let hopLe = true ;
    if(ten === ""){
        loiTen.textContent = "Bạn chưa nhập sản phẩm!"
        hopLe = false;
    }
   if (hopLe != true){
    return;
   }

   
});