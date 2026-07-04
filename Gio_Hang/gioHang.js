const inputTen = document.getElementById("inputTen");
const inputGia = document.getElementById("inputGia");
const inputSoLuong = document.getElementById("inputSoLuong");
const btnThem = document.getElementById("btnThem");
const bodyBang = document.getElementById("danh-sach-sp");
const tongTien = document.getElementById("tongTien");
const loiTen = document.getElementById("loiTen");
const loiGia = document.getElementById("loiGia");
const loiSoLuong = document.getElementById("loiSoLuong");
const inputGiamGia = document.getElementById("giamGia");
const inputTimKiem = document.getElementById("inputTimKiem");

// 1. KIỂM TRA CỐP XE LOCALSTORAGE NGAY KHI MỞ TRANG
let duLieuCu = localStorage.getItem("kho_san_pham");
let danhSachSanPham = [];

if (duLieuCu !== null) {
  danhSachSanPham = JSON.parse(duLieuCu);
} else {
  danhSachSanPham = [];
}

let viTriSua = -1;

// Vẽ liền giao diện cũ nếu có dữ liệu
hienThiGiaoDien();

// 2. SỰ KIỆN BẤM NÚT THÊM / CẬP NHẬT
btnThem.addEventListener("click", function () {
  const ten = inputTen.value.trim();
  const gia = Number(inputGia.value);
  const soLuong = Number(inputSoLuong.value);
  const giam = Number(inputGiamGia.value);
  let hopLe = true;

  loiTen.textContent = "";

  if (ten === "") {
    loiTen.textContent = "Bạn chưa nhập sản phẩm!";
    hopLe = false;
  }
  if (gia <= 0 || soLuong <= 0) {
    alert("Giá và số lượng phải lớn hơn 0");
    hopLe = false;
  }
  if (hopLe != true) {
    return;
  }

  if (viTriSua !== -1) {
    // Chế độ Sửa
    danhSachSanPham[viTriSua].ten = ten;
    danhSachSanPham[viTriSua].gia = gia;
    danhSachSanPham[viTriSua].soLuong = soLuong;
    danhSachSanPham[viTriSua].giam = giam;
    viTriSua = -1;
    btnThem.textContent = "Thêm Sản Phẩm";
  } else {
    // Chế độ Thêm mới
    let sanPham = {
      ten: ten,
      gia: gia,
      soLuong: soLuong,
      giam: giam,
    };
    danhSachSanPham.push(sanPham);
  }

  hienThiGiaoDien();

  // Xóa sạch ô nhập
  inputTen.value = "";
  inputGia.value = "";
  inputSoLuong.value = "";
  inputGiamGia.value = "";

  // Lưu vào cốp sau khi Thêm/Sửa
  localStorage.setItem("kho_san_pham", JSON.stringify(danhSachSanPham));
});

// 3. HÀM HIỂN THỊ GIAO DIỆN
function hienThiGiaoDien(mangHienThi = danhSachSanPham) {
  let chuoiHTML = "";
  let tong = 0;

  mangHienThi.forEach(function (sp, index) {
    let thanhTien = sp.gia * sp.soLuong * (1 - sp.giam / 100);
    tong += thanhTien;
    let viTriGoc = danhSachSanPham.indexOf(sp);
    chuoiHTML += `
            <tr>
            <td>${sp.ten}</td>
            <td>${sp.gia.toLocaleString("vi-VN")}</td>
            <td>${sp.soLuong}</td>
            <td>${sp.giam}%</td>
            <td>${thanhTien.toLocaleString("vi-VN")}</td>
            <td>
            <button class="btn-sua" onclick="sua(${viTriGoc})">Sửa</button>
            <button class="btn-xoa" onclick="xoa(${viTriGoc})">Xóa🗑️</button>
            </td>
            </tr>
            `;
  });
  bodyBang.innerHTML = chuoiHTML;
  tongTien.textContent = tong.toLocaleString("vi-VN") + " VNĐ";
}

// 4. HÀM XÓA SẢN PHẨM
function xoa(viTri) {
  let xacNhan = confirm("Bạn có chắc muốn xóa?");
  if (xacNhan) {
    danhSachSanPham.splice(viTri, 1);
    hienThiGiaoDien();
    // 🛠️ CẬP NHẬT LẠI CỐP XE SAU KHI XÓA (Tránh lỗi F5 hiện lại đồ cũ)
    localStorage.setItem("kho_san_pham", JSON.stringify(danhSachSanPham));
  }
}

// 5. HÀM SỬA SẢN PHẨM
function sua(viTri) {
  inputTen.value = danhSachSanPham[viTri].ten;
  inputGia.value = danhSachSanPham[viTri].gia;
  inputSoLuong.value = danhSachSanPham[viTri].soLuong;
  inputGiamGia.value = danhSachSanPham[viTri].giam;
  viTriSua = viTri;
  btnThem.textContent = "Cập Nhật";
}

inputTimKiem.addEventListener("input", function() {
    // 1. Lấy chữ người dùng đang gõ và chuyển thành chữ viết thường (.toLowerCase())
    const tuKhoa = inputTimKiem.value.trim().toLowerCase();

    // 2. Dùng hàm .filter để lọc ra các sản phẩm có tên chứa từ khóa
    const mangDaLoc = danhSachSanPham.filter(function(sp) {
        // Chuyển tên sản phẩm thành chữ viết thường rồi mới so sánh để không bị phân biệt chữ Hoa - chữ Thường
        return sp.ten.toLowerCase().includes(tuKhoa);
    });

    // 3. Gọi hàm vẽ giao diện và truyền cái mảng đã lọc này vào!
    hienThiGiaoDien(mangDaLoc);
});