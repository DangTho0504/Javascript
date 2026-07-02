// 1. Nhận diện các thẻ HTML
const inputTen = document.getElementById("inputTen");
const inputGia = document.getElementById("inputGia");
const inputSoLuong = document.getElementById("inputSoLuong");
const btnThem = document.getElementById("btnThem");
const bodyBang = document.getElementById("danh-sach-sp");

const loiTen = document.getElementById("loiTen");
const loiGia = document.getElementById("loiGia");
const loiSoLuong = document.getElementById("loiSoLuong");

let danhSachSanPham = [];
let viTriSua = -1;
// Tạo bảng
btnThem.addEventListener("click", function () {
  const ten = inputTen.value;
  const gia = inputGia.value;
  const soLuong = inputSoLuong.value;
  loiTen.textContent = "";
  loiGia.textContent = "";
  loiSoLuong.textContent = "";
  let hoLe = true;
  if (ten === "") {
    loiTen.textContent = "Bạn chưa nhập tên sản phẩm!";
    hoLe = false;
  }
  if (gia === "" || gia < 0) {
    loiGia.textContent = "Bạn chưa nhập giá hoặc giá < 0";
    hoLe = false;
  }
  if (soLuong === "" || soLuong <= 0) {
    loiSoLuong.textContent = " Bạn chưa nhập hoặc nhập số âm";
    hoLe = false;
  }
  if (!hoLe) {
    return;
  }
  if (viTriSua != -1) {
    danhSachSanPham[viTriSua].ten = ten;
    danhSachSanPham[viTriSua].gia = Number(gia);
    danhSachSanPham[viTriSua].soLuong = Number(soLuong);
    danhSachSanPham[viTriSua].tien = Number(gia) * Number(soLuong);
    viTriSua = -1;
    btnThem.textContent = "Thêm sản phẩm";
    btnThem.style.background = "green";
  } else {
    let tongTien = gia * soLuong;
    let thongTin = {
      ten: ten,
      gia: gia,
      soLuong: soLuong,
      tien: tongTien,
    };
    danhSachSanPham.push(thongTin);
    }
    giaoDienBang();
    inputTen.value = "";
    inputSoLuong.value = "";
    inputGia.value = "";
});

function giaoDienBang() {
  let chuoiHTML = "";
  danhSachSanPham.forEach(function (user, index) {
    chuoiHTML += ` 
    <tr>
    <td>${user.ten}</td>
    <td>${user.gia}</td>
    <td>${user.soLuong}</td>
    <td>${user.tien}</td>
    <td>
    <button class ="btn-xoa" onclick = "sua(${index})">Sửa </button>
    <button class = "btn-xoa" onclick = "xoa(${index})">Xóa</button>
    </td>
    </tr>
    `;
    bodyBang.innerHTML = chuoiHTML;
  });
}

function xoa(viTri) {
  let xacNhan = confirm("Bạn chắc muốn xóa sản phẩm này!!");
  if (xacNhan) {
    danhSachSanPham.splice(viTri, 1);
    giaoDienBang();
  }
}

function sua(viTri) {
  inputTen.value = danhSachSanPham[viTri].ten;
  inputGia.value = danhSachSanPham[viTri].gia;
  inputSoLuong.value = danhSachSanPham[viTri].soLuong;
  btnThem.textContent = "Xác nhận sửa";
  btnThem.style.background = "orange";
  viTriSua = viTri;
}
