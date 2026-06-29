const name = document.getElementById("input-ten");
const phone = document.getElementById("input-sdt");
const click = document.getElementById("btn");
const render = document.getElementById("hien-thi");

const danhBa = [];

click.addEventListener("click", function () {
  const thongTin = {
    ten: name.value,
    sdt: phone.value,
  };
  danhBa.push(thongTin);
  let chuoiHTML = "";
  danhBa.forEach(function (user, index) {
    chuoiHTML += ` <tr>
                <td>${user.ten}</td>

                <td>${user.sdt}</td>

                <td>
                    <button onclick="xoaDanhBa(${index})">
                        Xóa
                    </button>
                </td>
            </tr>`;
  });
  render.innerHTML = chuoiHTML;
  name.value = "";
  phone.value = "";
});
function xoaDanhBa(viTri) {
  // 1. Dùng lệnh splice để xóa đúng 1 phần tử tại vị trí được bấm
  danhBa.splice(viTri, 1);
  let chuoiHTML = "";
  danhBa.forEach(function (user, index) {
    chuoiHTML += `   <tr>
                <td>${user.ten}</td>

                <td>${user.sdt}</td>

                <td>
                    <button onclick="xoaDanhBa(${index})">
                        Xóa
                    </button>
                </td>
            </tr>`;
  });

  // Đập lại danh sách mới đã xóa lên màn hình
  render.innerHTML = chuoiHTML;
}
