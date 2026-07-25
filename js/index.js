// baitap1
document.querySelector("#check").onclick = function () {
    let diemchuan = Number(document.getElementById("diemchuan").value);
    let khuvuc = document.getElementById("city").value;
    let doituong = document.getElementById("doituong").value;
    let mon1 = Number(document.getElementById("mon1").value);
    let mon2 = Number(document.getElementById("mon2").value);
    let mon3 = Number(document.getElementById("mon3").value);

    let diemKV = diemKhuVuc(khuvuc);
    let diemDT = diemDoiTuong(doituong);
    let tong = tongDiem(mon1, mon2, mon3, diemKV, diemDT);

    let kq = ketQua(diemchuan, mon1, mon2, mon3, tong);


    function diemKhuVuc(khuvuc) {
        if (khuvuc == "A") return 2;
        if (khuvuc == "B") return 1;
        if (khuvuc == "C") return 0.5;
        return 0;
    }


    function diemDoiTuong(doituong) {
        if (doituong == "1") return 2.5;
        if (doituong == "2") return 1.5;
        if (doituong == "3") return 1;
        return 0;
    }

    function tongDiem(mon1, monn2, mon3, diemKV, diemDT) {
        return Number(mon1) + Number(mon2) + Number(mon3) + Number(diemKV) + Number(diemDT);
    }
    function ketQua(diemchuan, mon1, mon2, mon3, tongdiem) {
        if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
            return "Bạn đã rớt vì có môn bị 0 điểm"
        }
        if (tongdiem >= diemchuan) {
            return "Bạn đã đậu . Tổng điểm " + tongdiem;
        }
        return "Bạn đã rớt . Tổng điểm" + tongdiem;
    }

    document.getElementById("result").innerText = kq

}

// baitap2

function tinhTienDien(sokw) {
    sokw = Number(sokw);

    if (sokw <= 50) {
        return sokw * 500;
    }
    else if (sokw <= 100) {
        return 50 * 500 + (sokw - 50) * 650;
    }
    else if (sokw <= 200) {
        return 50 * 500 + 50 * 650 + (sokw - 100) * 850;
    }
    else if (sokw <= 350) {
        return 50 * 500 + 50 * 650 + 100 * 850 + (sokw - 200) * 1100;
    }
    else {
        return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (sokw - 350) * 1300;
    }
}

document.getElementById("check2").onclick = function () {
    let hoten = document.getElementById("hoten").value;
    let sokw = document.getElementById("sokw").value;

    let tiendien = tinhTienDien(sokw);

    document.getElementById("result2").innerText =
        "Tên khách hàng: " + hoten +
        "; Tiền điện: " + tiendien;
}

// baitap3
document.getElementById("check3").onclick = function () {
    let hoten3 = document.getElementById("hoten3").value;
    let thunhap = Number(document.getElementById("thunhap").value);
    let songuoi = Number(document.getElementById("songuoi").value);

    let tienthue = tinhTienThue(thunhap, songuoi);
    let format = new Intl.NumberFormat('vi-VN').format(tienthue);

    function tinhTienThue(thunhap, songuoi) {
        let chiuthue = thunhap - 4000000 - songuoi * 1600000;
        let tienthue = 0;

        if (chiuthue > 0) {
            if (chiuthue <= 60000000) {
                tienthue = chiuthue * 0.05;
            } else if (chiuthue <= 120000000) {
                tienthue = chiuthue * 0.10;
            } else if (chiuthue <= 210000000) {
                tienthue = chiuthue * 0.15;
            } else if (chiuthue <= 384000000) {
                tienthue = chiuthue * 0.20;
            } else if (chiuthue <= 624000000) {
                tienthue = chiuthue * 0.25;
            } else if (chiuthue <= 960000000) {
                tienthue = chiuthue * 0.30;
            } else {
                tienthue = chiuthue * 0.35;
            }
        }
        return tienthue;
    }




    document.getElementById("result3").innerText = "Họ tên: " + hoten3 + " ; Tiền thuế thu nhập cá nhân: " + format + " VNĐ";
};

// baitap4
document.getElementById("customerType").onchange = function () {
    let customerType = document.getElementById("customerType").value;
    let connectionDiv = document.getElementById("connectionDiv");


    if (customerType === "business") {
        connectionDiv.style.display = "block";
    } else {
        connectionDiv.style.display = "none";
    }
};


document.getElementById("calcCableBtn").onclick = function () {

    let customerType = document.getElementById("customerType").value;
    let customerId = document.getElementById("customerId").value;
    let channels = Number(document.getElementById("channels").value);
    let connections = Number(document.getElementById("connections").value);

    let resultDiv = document.getElementById("result4");
    let totalBill = 0;


    if (customerType === "") {
        resultDiv.innerHTML = "Vui lòng chọn loại khách hàng!";
        resultDiv.className = "mt-3 alert alert-danger";
        return;
    }


    if (customerType === "residential") {
        let processingFee = 4.5;
        let basicServiceFee = 20.5;
        let premiumChannelFee = 7.5 * channels;

        totalBill = processingFee + basicServiceFee + premiumChannelFee;
    }

    else if (customerType === "business") {
        let processingFee = 15;
        let premiumChannelFee = 50 * channels;
        let basicServiceFee = 75;


        if (connections > 10) {
            basicServiceFee += (connections - 10) * 5;
        }

        totalBill = processingFee + basicServiceFee + premiumChannelFee;
    }


    let formattedBill = totalBill.toLocaleString("en-US", { style: "currency", currency: "USD" });
    resultDiv.innerHTML = "Mã khách hàng: " + customerId + " - Tiền cáp: " + formattedBill;
    resultDiv.className = "mt-3 alert alert-success";
};