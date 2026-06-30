const inputMaSV = document.getElementById("maSV");
const inputHoTen = document.getElementById("hoTen");
const inputLop = document.getElementById("lop");
const inputDiem = document.getElementById("diem");
const btnThem = document.getElementById("btnThem");
const btnXoa = document.getElementById("btn-xoa");
const btnSua = document.getElementById("btn-sua");
const tableBody = document.getElementById("danhSachSinhVien");

// Khai báo dữ liệu
let danhSachSinhVien = [];
let viTriSua = -1;

// Hàm DOM
btnThem.addEventListener("click", function () {
  const maSV = inputMaSV.value;
  const ten = inputHoTen.value;
  let diem = Number(inputDiem.value);
  const lop = inputLop.value;
  let xepLoai = "";
  // xep hang
  if (diem >= 8) {
    xepLoai = "Giỏi";
  } else if (diem >= 6.5) {
    xepLoai = "Khá";
  } else if (diem >= 5) {
    xepLoai = "Trung Bình";
  } else {
    xepLoai = "Yếu";
  }
  if (viTriSua != -1) {
    danhSachSinhVien[viTriSua].maSV = inputMaSV.value;
    danhSachSinhVien[viTriSua].ten = inputHoTen.value;
    danhSachSinhVien[viTriSua].lop = inputLop.value;
    danhSachSinhVien[viTriSua].diem = inputDiem.value;
    danhSachSinhVien[viTriSua].xepLoai = xepLoai;

    btnThem.innerText = "Thêm Sinh Viên";
    btnThem.style.background = "green";
    viTriSua = -1;
  } else {
    let sinhVien = {
      maSV: inputMaSV.value,
      ten: inputHoTen.value,
      diem: inputDiem.value,
      lop: lop,
      xepLoai: xepLoai,
    };
     danhSachSinhVien.push(sinhVien);
  }
 
  hienThiDanhSach();
  inputMaSV.value = "";
  inputHoTen.value = "";
  inputLop.value = "";
  inputDiem.value = "";
});

// Hiển thị table
function hienThiDanhSach() {
  let chuoiHTML = "";
  danhSachSinhVien.forEach(function (user, index) {
    chuoiHTML += `
 <tr>

                    <td>${user.maSV}</td>
                    <td>${user.ten}</td>
                    <td>${user.lop}</td>
                    <td>${user.diem}</td>
                    <td>${user.xepLoai}</td>
                    <td>
                    <button class = "btn-sua" onclick = "suaSinhVien(${index})">Sửa</button>
                    <button class = "btn-xoa" onclick = "xoaSinhVien(${index})">Xóa</button>
                    </td>
                </tr>

`;
  });
  tableBody.innerHTML = chuoiHTML;
}
function xoaSinhVien(viTri) {
  let xacNhan = confirm("Bạn có chắc muốn xóa?");
  if (xacNhan) {
    danhSachSinhVien.splice(viTri, 1);
    hienThiDanhSach();
  }
}
function suaSinhVien(viTri) {
  inputMaSV.value = danhSachSinhVien[viTri].maSV;
  inputHoTen.value = danhSachSinhVien[viTri].ten;
  inputLop.value = danhSachSinhVien[viTri].lop;
  inputDiem.value = danhSachSinhVien[viTri].diem;
  viTriSua = viTri;
  btnThem.innerText = "Xác nhận sửa";
  btnThem.style.background = "orange";
}
