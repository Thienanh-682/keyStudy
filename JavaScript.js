    let sinhvien = function (hoten, lop, gioitinh, diem, xeploai) {
        this.hoten = hoten;
        this.lop = lop;
        this.gioitinh = gioitinh;
        this.diem = diem;
        this.xeploai = xeploai;

        this.gethoten = function () {
        return this.hoten
    };
        this.sethoten = function (value) {
        this.hoten = value
    };
        this.getlop = function () {
        return this.lop
    };
        this.setlop = function (value) {
        this.lop = value
    };
        this.getgioitinh = function () {
        return this.gioitinh
    };
        this.setgioitinh = function (value) {
        this.gioitinh = value
    };
        this.getdiem = function () {
        return this.diem
    };
        this.setdiem = function (value) {
        this.diem = value
    };
        this.getxephang = function () {
        return this.xeploai
    };
        this.setxephang = function (value) {
        this.xeploai = value
    };

        this.thongtinSinhvien = function () {
        return "Họ Và Tên: " + this.hoten + "<br>Lớp: " + this.lop + "<br>Giới Tính: " + this.gioitinh + "<br>Điểm: " + this.diem + "<br>Xếp Loại: " + this.xeploai;
    };
};

        let sinhvien1 = new sinhvien("Lưu Đức Thiên Anh", "C809h2", "Nam", "5", "Trung bình");
        let sinhvien2 = new sinhvien("Phạm Hữu Minh", "C0819h2", "Nam", "7", "Khá");
        let sinhvien3 = new sinhvien("Trần Ngọc Dương", "C0819h2", "Nam", "8", "Khá");
        let sinhvien4 = new sinhvien("Lê Tấn Đạt", "C0819h2", "Nam", "8", "Khá");
        let sinhvien5 = new sinhvien("Lê Duy Dương", "C0829h2", "Nam", "9", "Giỏi");


        let arrSinhvien = [];
             arrSinhvien.push(sinhvien1);
             arrSinhvien.push(sinhvien2);
             arrSinhvien.push(sinhvien3);
             arrSinhvien.push(sinhvien4);
              arrSinhvien.push(sinhvien5);


    function searchSinhVien() {
         let inp1 = document.getElementById("search");
            for (let i = 0; i < arrSinhvien.length; i++) {
                if (arrSinhvien[i].hoten === inp1.value) {
                      document.getElementById("hienthi").innerHTML = arrSinhvien[i].thongtinSinhvien() + " " +
                       `<button type='button' onclick='xoa(${i})'>Xóa</button> <button type='button' onclick='sua(${i})'>Sửa</button><br><hr>`;
                    break;
        } else {
            document.getElementById("hienthi").innerHTML = "Không có kết quả tìm kiếm:"
        }
    }
}

    function hienthiSinhvien() {
        document.getElementById("hienthi").innerHTML = " ";
    for (let i = 0; i < arrSinhvien.length; i++) {
        document.getElementById("hienthi").innerHTML += arrSinhvien[i].thongtinSinhvien() + " " +
            `<button type='button' onclick='xoa(${i})'>Xóa</button> <button type='button' onclick='sua(${i})'>Sửa</button><br><hr>`;
        }
    }

    function ThemSinhVien() {
        let ThemSinhVienNew = new sinhvien();
            arrSinhvien.push(ThemSinhVienNew);

    let hoten = prompt("Họ và Tên");
    let lop = prompt("Lớp");
    let gioitinh = prompt("Giới Tính");
    let diem = prompt("Điểm");
    let xeploai = prompt("Xếp Loại");

    ThemSinhVienNew.sethoten(hoten);
    ThemSinhVienNew.setlop(lop);
    ThemSinhVienNew.setgioitinh(gioitinh);
    ThemSinhVienNew.setdiem(diem);
    ThemSinhVienNew.setxephang(xeploai);
    hienthiSinhvien();
    }

    function xoa(index) {
    arrSinhvien.splice(index, 1);
    hienthiSinhvien();
    }

    function sua(index) {
    arrSinhvien[index].hoten = prompt("Họ Và Tên");
    arrSinhvien[index].lop = prompt("Lớp");
    arrSinhvien[index].gioitinh = prompt("Giới Tính");
    arrSinhvien[index].diem = prompt("Điểm");
    arrSinhvien[index].xeploai = prompt("Xếp Loại");
    hienthiSinhvien();
    }


        
