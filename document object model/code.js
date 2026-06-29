const name = document.getElementById("o-nhap-ten");
const click = document.getElementById("bam");
const hello = document.getElementById("hello-name");

click.addEventListener("click", function () {
  let xuat = name.value;
  console.log(
    (hello.innerText = "Xin chao ban " + xuat + " chúc bạn một ngày tốt lạnh."),
  );
});

// Danh sách đi chợ

const monAn = document.getElementById("mon-an");
const press = document.getElementById("nut-them");
const content = document.getElementById("danh-sach-mua-sam");

const gioHang = [];

press.addEventListener("click", function () {
  gioHang.push(monAn.value);
  console.log(gioHang);
  let chuoiHTML = "";
  gioHang.forEach(function (ten) {
    chuoiHTML += `<li> ${ten}</li>`;
  });
  content.innerHTML = chuoiHTML;
});

// Tạo danh bạ điện thoại

