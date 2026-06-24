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

xuatDuLieu.addEventListener("click", function (){
    const name = nameInput.value;
    const phone = phoneInput.value;
    if (phone === "" || name === ""){
        alter("Cảnh báo: Bạn nhập thiếu tên hoặc số điện thoại!");
        return;
    }
});