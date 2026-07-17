// baitap1
document.querySelector("#check").onclick = function () {
    let kq = ""
    let diemchuan = document.getElementById("diemchuan").value
    let khuvuc = document.getElementById("city").value
    let doituong = document.getElementById("doituong").value
    let mon1 = document.getElementById("mon1").value
    let mon2 = document.getElementById("mon2").value
    let mon3 = document.getElementById("mon3").value

    let diemvung = 0
    if (khuvuc === "A") {
        diemvung = 2
    }
    else if (khuvuc === "B") {
        diemvung = 1
    }
    else if (khuvuc === "C") {
        diemvung = 0.5
    }

    let diemuutien = 0
    if (doituong === "1") {
        diemuutien = 2.5
    }
    else if (doituong === "2") {
        diemuutien = 1.5
    }
    else if (doituong === "3") {
        diemuutien = 1
    }

    if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
        kq = "Bạn đã rớt vì có môn bị 0 điểm"
    }
    else {
        let tongdiem = Number(diemvung) + Number(diemuutien) + Number(mon1) + Number(mon2) + Number(mon3)
        if (tongdiem > diemchuan) {
            kq = "Bạn đã đậu . Tổng điểm :" + tongdiem;
        } else {
            kq = "Bạn đỡ rớt . Tổng điểm :" + tongdiem;
        }
    }

    document.getElementById("result").innerText = kq

}

// baitap2
document.getElementById("check2").onclick = function () {
    let hoten = document.getElementById("hoten").value
    let sokw = document.getElementById("sokw").value
    let kq = ""
    let tiendien = 0
    if (sokw <= 50) {
        tiendien = Number(sokw) * 500
    }
    else if (sokw <= 100) {
        tiendien = 50 * 500 + Number(sokw) * 650
    }
    else if (sokw <= 200) {
        tiendien = 50 * 500 + 50 * 650 + Number(sokw) * 850
    }
    else if (sokw <= 350) {
        tiendien = 50 * 50 + 50 * 650 + 100 * 850 + Number(sokw) * 1100
    }
    else if (sokw > 350) {
        tiendien = 50 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + Number(sokw) * 1300
    }


    document.getElementById("result2").innerText = "Tên khách hàng : " + hoten + ";" + "      Tiền điện :" + tiendien
}


// baitap3
document.getElementById("check3").onclick = function () {
    let hoten3 = document.getElementById("hoten3").value
    let thunhap = document.getElementById("thunhap").value
    let songuoi = document.getElementById("songuoi").value

    let chiuthue = Number(thunhap) - 4000000 - Number(songuoi) * 1600000
    let tienthue = 0

    if (chiuthue > 0) {
        if (chiuthue <= 6000000) {
            tienthue = Number(chiuthue) * 0.05
        }
        else if(chiuthue <= 120000000){
            tienthue = Number(chiuthue) *0.10 
        }
        else if(chiuthue <= 210000000){
            tienthue = Number(chiuthue) *0.15
        }
        else if(chiuthue <= 384000000){
            tienthue = Number(chiuthue) *0.20
        }
        else if(chiuthue <= 624000000){
            tienthue = Number(chiuthue) *0.25
        }
        else if(chiuthue <= 960000000){
            tienthue = Number(chiuthue) *0.30
        } else {
            tienthue = Number(chiuthue) * 0.35
        }
    }

    let format = new Intl.NumberFormat('vi-VN').format(tienthue);

    document.getElementById("result3").innerText = "Họ tên :" + hoten3 +";"+ "Tiền thuế thu nhập cá nhân : " + format

}


// baitap4
document.getElementById("customerType").onchange = function() {
    let customerType = document.getElementById("customerType").value;
    let connectionDiv = document.getElementById("connectionDiv");

    
    if (customerType === "business") {
        connectionDiv.style.display = "block";
    } else {
        connectionDiv.style.display = "none";
    }
};


document.getElementById("calcCableBtn").onclick = function() {
    
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