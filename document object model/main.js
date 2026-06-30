const name = document.getElementById("input-ten");
const phone = document.getElementById("input-sdt");
const click = document.getElementById("btn");
const loiName = document.getElementById("code_1");
const loiPhone = document.getElementById("code_2");
// Đổi thẻ hứng sang tbody để không bị lỗi vỡ định dạng bảng
const render = document.getElementById("danh-sach-body");

const danhBa = [];
let idSua = null; // Biến ghi nhớ: dùng để lưu vị trí (index) hàng đang cần sửa

// ==========================================
// HÀM VẼ GIAO DIỆN BẢNG (Dùng chung)
// ==========================================
function renderDanhBa() {
  let chuoiHTML = "";
  danhBa.forEach(function (user, index) {
    // Sửa cấu trúc thành các thẻ hàng <tr> và cột <td> của Table
    chuoiHTML += `<tr>
          <td>${user.ten}</td>
          <td>${user.sdt}</td>
          <td>
              <button class="btn-sua" onclick="kichHoatCheDoSua(${index})">Sửa</button>
              <button class="btn-xoa" onclick="xoaDanhBa(${index})">Xóa</button>
          </td>
      </tr>`;
  });
  render.innerHTML = chuoiHTML;
}

// ==========================================
// HÀM XỬ LÝ KHI BẤM NÚT CHÍNH (THÊM HOẶC CẬP NHẬT)
// ==========================================
click.addEventListener("click", function () {
  const tenNguoiDung = name.value.trim();
  const sdtNguoiDung = phone.value.trim();
  loiName.textContent = "";
  loiPhone.innerText = "";
  if (tenNguoiDung === "") {
    loiName.textContent = "Bạn chưa nhập tên";
    loiName.style.color = "red";
  }
  if (sdtNguoiDung === "") {
    loiPhone.textContent = "Bạn chưa nhập số điện thoại";
    loiPhone.style.color = "green";
  }
  if (tenNguoiDung === "" || sdtNguoiDung === "") {
    return;
  }
  // KIỂM TRA: Nếu idSua khác null tức là đang ở chế độ CẬP NHẬT
  if (idSua !== null) {
    danhBa[idSua].ten = tenNguoiDung; // Đè dữ liệu mới vào mảng tại vị trí đang sửa
    danhBa[idSua].sdt = sdtNguoiDung;

    idSua = null; // Sửa xong thì reset biến ghi nhớ về lại ban đầu
    click.innerText = "Thêm Vào Danh Bạ"; // Đổi chữ cái nút lại thành Thêm
    click.style.backgroundColor = "#28a745"; // Trả lại màu xanh
  } else {
    // Ngược lại, nếu idSua bằng null thì làm hành động THÊM MỚI bình thường
    const thongTin = { ten: tenNguoiDung, sdt: sdtNguoiDung };
    danhBa.push(thongTin);
  }

  renderDanhBa(); // Vẽ lại bảng mới

  // Xóa sạch chữ trong ô nhập
  name.value = "";
  phone.value = "";
});

// ==========================================
// HÀM KÍCH HOẠT CHẾ ĐỘ SỬA
// ==========================================
function kichHoatCheDoSua(viTri) {
  // 1. Găm vị trí hàng cần sửa vào biến idSua
  idSua = viTri;

  // 2. Lấy dữ liệu cũ trong mảng đổ ngược lại lên ô nhập để người dùng thấy mà sửa
  name.value = danhBa[viTri].ten;
  phone.value = danhBa[viTri].sdt;

  // 3. Thay đổi giao diện cái nút chính để người dùng biết là đang chuẩn bị cập nhật
  click.innerText = "Lưu Cập Nhật";
  click.style.backgroundColor = "#ffc107"; // Đổi nút sang màu vàng cảnh báo
}

// ==========================================
// HÀM XÓA THÀNH VIÊN
// ==========================================
function xoaDanhBa(viTri) {
  let xacNhan = confirm("Bạn chắc muốn xóa không?");
  if (xacNhan) {
    danhBa.splice(viTri, 1);
    renderDanhBa();
  }
}
