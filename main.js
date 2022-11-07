function thuNhapThue() {
    var fullName = document.getElementById("fullName").value;
    var totalIncome = document.getElementById("totalIncome").value * 1;
    var dependPeople = document.getElementById("dependPeople").value * 1;
    taxIncome= totalIncome-4e+6-(dependPeople*1600000);
    // console.log (taxIncome);

var a=taxIncome;

if (0 < a && a <= 60e+6) {
  tax = a * 0.05;

} else if (60e+6< a && a <= 120e+6) {
  tax = 60e+6 * 0.05 + (a - 60e+6) * 0.1;
 
} else if (120e+6 < a && a<= 210e+6) {
  tax = 60e+6 * 0.05 + 60e+6 * 0.1 + (a- 120e+6) * 0.15;

} else if (210e+6 < a  && a <= 384e+6) {
  tax =60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (a - 210e+6) * 0.2;

} else if (3840e+6< a  && a <= 624e+6) {
  tax =60e+6 * 0.05 +60e+6* 0.1 + 90e+6 * 0.15 +174e+6 * 0.2 +(a - 384e+6) * 0.25;
  
} else if (624e+6 < a  && a <= 960e+6 ) {
  tax =60e+6 * 0.05 +60e+6 * 0.1 +90e+6 * 0.15 +174e+6 * 0.2 +240e+6 * 0.25 +
    (a - 624000000) * 0.3;
 
} else {
  tax =60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 +336e+6 * 0.3 + (a - 960e+6) * 0.35;

}
var result = "Thuế thu nhập cá nhân của " +fullName+ " là: " +tax;
console.log(result);
document.getElementById("result").innerHTML = result;
document.getElementById("result").className="info";

// document.getElementById("result").style.backgroundColor="green";
// document.getElementById("result").style.color="white";
// document.getElementById("result").style.textAlign="center";
// document.getElementById("result").style.fontSize="20px";
// document.getElementById("result").style.marginTop="30px";
}

// bài tập tính tiền điện 

function tienDien() {
    var user = document.getElementById("user").value;
    var kW = document.getElementById("totalkW").value * 1;
    var p1= 500;
    var p2=650;
    var p3=850;
    var p4=1100;
    var p5=1300;
    
if (0< kW && kW<=50) {
    electricPrice = p1*kW;
} else if (50< kW && kW <=100) {
    electricPrice = p1*50 + (kW-50)*p2;
} else if (100< kW && kW <=200) {
    electricPrice = p1*50 + 50*p2 + (kW-100)*p3;
}  else if (200< kW && kW <=350) {
    electricPrice = p1*50 + 50*p2 + 100*p3 + (kW-200)*p4;
}  else {
    electricPrice = p1*50 + 50*p2 + 100*p3 + 150*p4 +(kW-350)*p5;
}
var price = "Tiền điện của " +user+" là: " +electricPrice ;
console.log(price);
document.getElementById("price").innerHTML = price;
document.getElementById("price").className="info";
}


// bài tập tính điểm thi
function khuVuc() {
    document.querySelector(".dropdown_info").classList.toggle("hienThi");
}
function doiTuong() {
    document.querySelector(".dropdown_info_2").classList.toggle("hienThi");
}

function diemThi() {
    var score = document.getElementById("score").value*1;
    var sub_1= document.getElementById("subject_1").value * 1;
    var sub_2= document.getElementById("subject_2").value * 1;
    var sub_3= document.getElementById("subject_3").value * 1;

    var khuVucAInput= document.getElementById("khuVucA");
    var khuVucBInput= document.getElementById("khuVucB");
    var khuVucCInput= document.getElementById("khuVucC");

    var type1Input= document.getElementById("type_1");
    var type2Input= document.getElementById("type_2");
    var type3Input= document.getElementById("type_3");

if (sub_1===0 || sub_2===0 || sub_3===0) {
var result = "Bạn đã rớt!";
console.log(result);
document.getElementById("ketQua").innerHTML = result;
document.getElementById("ketQua").className="info";
} 

else if (khuVucAInput.checked===true) {
    area =1; 
    } else if (khuVucBInput.checked===true) {
        area =2; 
    } else if (khuVucCInput.checked===true) {
        area =3; 
    } else {
        area =0; 
    }

if (area===1) {
        scorePlus1= 2;
} else if (area===2) {
        scorePlus1 = 1;
}else if (area===3){
        scorePlus1= 0.5;
} else {
        scorePlus1=0;
    }

if (type1Input.checked===true) {
        type =1; 
        } else if (type2Input.checked===true) {
            type =2; 
        } else if (type3Input.checked===true) {
            type =3; 
        } else {
            type =0; 
        }

if (type===1) {
    scorePlus2= 2.5;
} else if (area===2) {
    scorePlus2 = 1.5;
}else if (area===3){
    scorePlus2= 1;
} else {
    scorePlus2=0;
}
    var totalScore = sub_1 + sub_2 + sub_3 + scorePlus1 + scorePlus2;
    if (totalScore < score) {
    console.log(totalScore);
    var result = "Tổng điểm của bạn là: " +totalScore + ". Bạn đã rớt!" ;
    console.log(result);
    document.getElementById("ketQua").innerHTML = result;
    document.getElementById("ketQua").className="info";
}
else {
    console.log(totalScore);
    var result = "Tổng điểm của bạn là: " +totalScore + ". Bạn đã trúng tuyển!" ;
    console.log(result);
    document.getElementById("ketQua").innerHTML = result;
    document.getElementById("ketQua").className="info";
}
} 


function tienCab() {
    var userCode = document.getElementById("userCode").value;
    var numChannel = document.getElementById("numChannel").value * 1;
    var numConnection = document.getElementById("numConnection").value * 1;
    var nhaDanInput= document.getElementById("nhaDan");
    var doanhNghiepInput= document.getElementById("doanhNghiep");

    if (nhaDanInput.checked===true) {
        typeOfCus =1; 
        } else if (doanhNghiepInput.checked=== true) {
            typeOfCus =2; 
        } 
    if (typeOfCus===1) {
        function checkType() {
            document.getElementById("numConnection").disabled===true;
        }
        billFee =4.5;
        serviceFee = 20.5;
        channelFee = 7.5;
        totalCabFee= billFee + serviceFee + channelFee * numChannel;
        console.log(totalCabFee);
        var cabFee = "Tổng tiền của bạn: " +totalCabFee + " $" ;
        document.getElementById("totalFee").innerHTML = cabFee;
        document.getElementById("totalFee").className="info";
    }
else if (typeOfCus===2) {
    billFee = 15;
    channelFee = 50;
    if (0<numConnection&& numConnection<=10) {
    serviceFee = 75;
} else {
    serviceFee = 75 + (numConnection-10)*5;
}
    totalCabFee= billFee + serviceFee + channelFee *numChannel;
    console.log(totalCabFee);
    var cabFee = "Tổng tiền của bạn: " +totalCabFee + " $" ;
    console.log(cabFee);
    document.getElementById("totalFee").innerHTML = cabFee;
    document.getElementById("totalFee").className="info";
}
}


