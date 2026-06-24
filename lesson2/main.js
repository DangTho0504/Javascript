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

//Xuất dữ liệu thông tin User
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const xuatDuLieu = document.getElementById("btn");

xuatDuLieu.addEventListener("click", function () {
  //Lấy giá trị tên và sđt
  const name = nameInput.value;
  const phone = phoneInput.value;
  // Trước tiên, xóa sạch lỗi cũ (nếu có) để kiểm tra lại từ đầu

  document.getElementById("nameError").textContent = "";
  document.getElementById("phoneError").textContent = "";

  let hopLe = true; // Biến đánh dấu xem form có sạch lỗi không

  // 1. Kiểm tra riêng cho Tên
  if (name === "") {
    document.getElementById("nameError").textContent =
      "Bạn không được để trống họ tên!";
    hopLe = false; // Phát hiện có lỗi
  }

  // 2. Kiểm tra riêng cho Số điện thoại
  if (phone === "") {
    document.getElementById("phoneError").textContent =
      "Bạn không được để trống số điện thoại!";
    hopLe = false; // Phát hiện có lỗi
  }

  // 3. Nếu có bất kỳ lỗi nào (hopLe biến thành false), chặn không cho gom Object
  if (hopLe === false) {
    return;
  }
  if (phone === "" || name === "") {
    alert("Cảnh báo: Bạn nhập thiếu tên hoặc số điện thoại!");
    return; //dừng lại luôn k chạy xuống dưới
  }
  const user = {
    hoTen: name,
    soDienThoai: phone,
    ngaySinh: birthday.value,
    tuoi: showAgeInput.value,
    address: document.getElementById("address").value,
  };
  console.log(`Dữ liệu hợp lệ:`);
  console.log(user);
});

