const inputSoA = document.getElementById("inputA");
const inputSoB = document.getElementById("inputB");
const btnCong = document.getElementById("btnCong");
const btnTru = document.getElementById("btnTru");
const btnNhan = document.getElementById("btnNhan");
const btnChia = document.getElementById("btnChia");
const hienThiKetQua = document.getElementById("ketQua");

btnCong.addEventListener("click", function () {
  const soA = Number(inputSoA.value);
  const soB = Number(inputSoB.value);
  const cong = soA + soB;
  hienThiKetQua.textContent = cong;
});
btnTru.addEventListener("click", function () {
  const soA = Number(inputSoA.value);
  const soB = Number(inputSoB.value);
  const tru = soA - soB;
  hienThiKetQua.textContent = tru;
});

btnNhan.addEventListener("click", function () {
  const soA = Number(inputSoA.value);
  const soB = Number(inputSoB.value);
  const nhan = soA * soB;
  hienThiKetQua.textContent = nhan;
});

btnChia.addEventListener("click", function () {
  const soA = Number(inputSoA.value);
  const soB = Number(inputSoB.value);
if (soB === 0){
    alert("Không thể chia hết cho 0");
    return;
}
    const chia = soA / soB;
    hienThiKetQua.textContent = chia;
});
