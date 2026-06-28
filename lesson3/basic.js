const traiCay = ["Táo", "Chuối", "Cam"];
traiCay.push("Xoài");
console.log(traiCay.indexOf("Cam"));
traiCay.splice(1, 1);
console.log(traiCay);

const danhSachLop = ["An", "Bình", "Cường", "Thọ"];
danhSachLop.forEach(function (ten) {
  console.log("Chào bạn " + ten);
});

const bangDiem = [5, 8, 4, 9, 3, 7];
bangDiem.forEach(function (diem) {
  if (diem >= 5) console.log(diem);
});

const chiTieu = [20000, 50000, 15000, 100000];
let money = 0;
chiTieu.forEach(function (tien) {
  money += tien;
});
console.log(money);
//Object

const thuCung = {
ten: "Mực",
loai: "Chó",
tuoi: 3,
};
console.log("Thú cưng của tôi tên là " + thuCung.ten + ", nó là một chú " + thuCung.loai + " năm nay " + thuCung.tuoi + " tuổi.");

const danhSachGiaDinh = [
    {hoTen: "Nguyễn Văn Lộc", quanHe: "cha"},
    {hoTen: "Nguyễn Thị Nho", quanHe: "mẹ"},
    {hoTen: "Nguyễn Vũ Trường Giang", quanHe: "anh"},
];
danhSachGiaDinh.forEach(function(nguoi){
            console.log(nguoi.hoTen+" là " + nguoi.quanHe + " của tôi");
});
