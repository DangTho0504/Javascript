const inputMaSV = document.getElementById("maSV");
const inputHoTen = document.getElementById("hoTen");
const inputLop = document.getElementById("lop");
const inputDiem = document.getElementById("diem");
const btnThem = document.getElementById("btnThem");
const btnXoa = document.getElementById("btn-xoa");
const btnSua = document.getElementById("btn-sua");
const tableBody = document.getElementById("danhSachSinhVien");

// Khai báo dữ liệu
let duLieuCu = localStorage.getItem("kho");
let danhSachSinhVien = [];
if (duLieuCu != null) {
  danhSachSinhVien = JSON.parse(duLieuCu);
} else {
  danhSachSinhVien = [];
}
let viTriSua = -1;
hienThiDanhSach();
// Hàm DOM
btnThem.addEventListener("click", function () {
  const maSV = inputMaSV.value;
  const ten = inputHoTen.value;
  let diem = Number(inputDiem.value);
  const lop = inputLop.value;

  if (viTriSua != -1) {
    danhSachSinhVien[viTriSua].maSV = inputMaSV.value;
    danhSachSinhVien[viTriSua].ten = inputHoTen.value;
    danhSachSinhVien[viTriSua].lop = inputLop.value;
    danhSachSinhVien[viTriSua].diem = inputDiem.value;
    btnThem.innerText = "Thêm Sinh Viên";
    btnThem.style.background = "green";
    viTriSua = -1;
  } else {
    let sinhVien = {
      maSV: inputMaSV.value,
      ten: inputHoTen.value,
      diem: inputDiem.value,
      lop: lop,
    };
    danhSachSinhVien.push(sinhVien);
  }

  hienThiDanhSach();
  clearForm();
  luuStorage();
});

// Hiển thị table
function hienThiDanhSach(mangHienThi = danhSachSinhVien) {
  let chuoiHTML = "";
 
  mangHienThi.forEach(function (sv) {
     let viTriGoc = danhSachSinhVien.findIndex(function (item) {
    return item.ten == sv.ten;
  });
    chuoiHTML += `
        <tr>
            <td>${sv.maSV}</td>
            <td>${sv.ten}</td>
            <td>${sv.lop}</td>
            <td>${sv.diem}</td>
            <td>${xepLoai(sv.diem)}</td>
            <td>
                <button class="btn-sua" onclick="suaSinhVien(${viTriGoc})">Sửa</button>
                <button class="btn-xoa" onclick="xoaSinhVien(${viTriGoc})">Xóa</button>
            </td>
        </tr>
        `;
    tableBody.innerHTML = chuoiHTML;
  });
}
function xoaSinhVien(viTri) {
  let xacNhan = confirm("Bạn có chắc muốn xóa?");
  if (xacNhan) {
    danhSachSinhVien.splice(viTri, 1);
    hienThiDanhSach();
  }
  luuStorage();
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
const inputTimKiem = document.getElementById("inputTimKiem");
inputTimKiem.addEventListener("input", function () {
  const timKiem = inputTimKiem.value.trim().toLowerCase();
  let mangDaLoc = danhSachSinhVien.filter(function (sv) {
    return sv.ten.toLowerCase().includes(timKiem);
  });
  hienThiDanhSach(mangDaLoc);
});

function luuStorage() {
  localStorage.setItem("kho", JSON.stringify(danhSachSinhVien));
}
function clearForm() {
  inputMaSV.value = "";
  inputHoTen.value = "";
  inputLop.value = "";
  inputDiem.value = "";
}
function xepLoai(diem) {

    if (diem >= 8) {
        return "Giỏi";
    } else if (diem >= 6.5) {
        return "Khá";
    } else if (diem >= 5) {
        return "Trung Bình";
    } else {
        return "Yếu";
    }

}