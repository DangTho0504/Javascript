const inputTodo = document.getElementById("todo-input");
const btnThem = document.getElementById("btn-them");
const giaoDien = document.getElementById("todo-list");

let danhSachViecLam = [];

btnThem.addEventListener("click", function () {
  const ten = inputTodo.value;

  let list = {
    ten: ten,
    hoanThanh: false,
  };

  danhSachViecLam.push(list);
  hienThiNoiDung();
  inputTodo.value = "";
});

function hienThiNoiDung() {
  let html = "";

  danhSachViecLam.forEach(function (viec, index) {
    let tenHienThi = viec.ten;
    let checked = "";
    if (viec.hoanThanh) {
      tenHienThi = `<s>${viec.ten}</s>`;
      checked = "checked";
    }

    html += `

    <li>

        <input type="checkbox" ${checked} >

        <span>${tenHienThi}</span>

        <button class="delete-btn"
        onclick="xoa(${index})">

        🗑️

        </button>

        <button class="btn-sua"
        onclick="hoanThanh(${index})">

        Hoàn Thành

        </button>

    </li>

`;
  });
  giaoDien.innerHTML = html;
}
function xoa(viTri) {
  danhSachViecLam.splice(viTri, 1);
  hienThiNoiDung();
}

function hoanThanh(viTri) {
  danhSachViecLam[viTri].hoanThanh = true;
  hienThiNoiDung();
}
