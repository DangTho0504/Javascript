const diemInput = document.getElementById("diem");
const kiemTra = document.getElementById("kiemTra");
const ketQua = document.getElementById("ketQua");

kiemTra.addEventListener("click", function () {
  const diem = Number(diemInput.value);
  if (diemInput.value === "") {
    ketQua.textContent = "Vui lòng nhập điểm trước khi kiểm tra!";
    ketQua.style.color = "orange"; // Đổi chữ thành màu cam để cảnh báo
    return; // Dừng hàm lại không chạy tiếp xuống dưới
  }

  // Bước 5: Sử dụng cấu trúc if - else if - else để phân loại điểm
  if (diem >= 8) {
    ketQua.textContent = "Xuất sắc! 🎉";
    ketQua.style.color = "green"; // Đổi chữ thành màu xanh lá
  } else if (diem >= 5 && diem < 8) {
    ketQua.textContent = "Đạt yêu cầu 👍";
    ketQua.style.color = "blue"; // Đổi chữ thành màu xanh dương
  } else {
    ketQua.textContent = "Cần cố gắng hơn 😢";
    ketQua.style.color = "red"; // Đổi chữ thành màu đỏ
  }
});

// Nhập birthday tự động hiện tuổi
const birthday = document.getElementById("birthday");
const showAgeInput = document.getElementById("showAge");

birthday.addEventListener("change", function () {
  const currentYear = new Date().getFullYear();

  const ngaySinhUser = new Date(birthday.value);
  const namSinh = ngaySinhUser.getFullYear();

  const age = currentYear - namSinh;

  showAgeInput.value = age;
});

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const xuatDuLieu = document.getElementById("btn");
const danhSachThanhVien = [];
// 1. Bắt sự kiện click nút
xuatDuLieu.addEventListener("click", function () {
  const name = nameInput.value;
  const phone = phoneInput.value;
  // 2. Xóa sạch chữ báo lỗi cũ (nếu có) trước khi kiểm tra lại
  document.getElementById("nameError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  // 3. Kiểm tra Tên
  if (name === "") {
    document.getElementById("nameError").textContent =
      "Bạn không được để trống họ tên!";
  }
  // 4. Kiểm tra Số điện thoại
  if (phone === "") {
    document.getElementById("phoneError").textContent =
      "Bạn không được để trống số điện thoại!";
  }
  // Nếu thẻ nameError HOẶC thẻ phoneError có chứa chữ (khác "") -> Chặn lại liền!
  if (
    document.getElementById("nameError").textContent !== "" ||
    document.getElementById("phoneError").textContent !== ""
  ) {
    return;
  }
  // 6. Gom Object (Chỉ chạy khi vượt qua tất cả các lỗi trên)
  const user = {
    hoTen: name,
    soDienThoai: phone,
    ngaySinh: birthday.value,
    tuoi: showAgeInput.value,
    address: document.getElementById("address").value,
  };
  console.log(`Dữ liệu hợp lệ:`);
  console.log(user);

  // 1. Nhét (push) thông tin người dùng vừa nhập (Object user) vào cuối mảng danh sách chung
  danhSachThanhVien.push(user);

  // 2. Tạo một biến tên là chuoiHTML với giá trị ban đầu là chuỗi rỗng để chuẩn bị gom các dòng bảng
  let chuoiHTML = "";

  // 3. Chạy vòng lặp qua từng người trong mảng danh sách, mỗi lượt gọi người đó là "thanhVien"
  danhSachThanhVien.forEach(function (thanhVien, index) {
    // 4. Lấy chuỗi cũ cộng dồn thêm (`+=`) code HTML tạo dòng (`<tr>`) và các ô (`<td>`) chứa dữ liệu thật của người đó
    chuoiHTML += `
        <tr>
            <td>${thanhVien.hoTen}</td>       <!-- Bắn họ tên của thành viên vào ô thứ nhất -->
            <td>${thanhVien.soDienThoai}</td> <!-- Bắn số điện thoại vào ô thứ hai -->
            <td>${thanhVien.tuoi}</td>        <!-- Bắn tuổi vào ô thứ ba -->
            <td>
            <button class="btn btn-danger btn-sm" onclick="xoaUser(${index})">Xóa</button>
        </td>
            </tr>
    `;
  }); // 5. Kết thúc vòng lặp sau khi đã duyệt qua hết tất cả mọi người trong mảng

  // 6. Tìm thẻ có id là "danhSachUser" ở file HTML và nạp (dịch) toàn bộ đống chuỗi HTML vừa gom được thành giao diện bảng thật
  document.getElementById("danhSachUser").innerHTML = chuoiHTML;

  // 7. Xóa sạch chữ trong ô nhập Họ Tên trên màn hình (đưa về rỗng) để chuẩn bị cho lần nhập sau
  nameInput.value = "";

  // 8. Xóa sạch chữ trong ô nhập Số Điện Thoại trên màn hình để chuẩn bị cho lần nhập sau
  phoneInput.value = "";
});
