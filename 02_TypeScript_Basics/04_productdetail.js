var mobileName = "Samsung M01";
var mobilePrice = "300";
var mobileStatus = "Available";
var MobilePrice;
(function (MobilePrice) {
    MobilePrice["GoldPlatinum"] = "59000";
    MobilePrice["PinkGold"] = "60200";
    MobilePrice["SilverTitanium"] = "60200";
})(MobilePrice || (MobilePrice = {}));
var MobileDiscount;
(function (MobileDiscount) {
    MobileDiscount["GoldPlatinum"] = "15%";
    MobileDiscount["PinkGold"] = "18%";
    MobileDiscount["SilverTitanium"] = "20%";
})(MobileDiscount || (MobileDiscount = {}));
document.getElementById("gold").innerHTML = MobilePrice.GoldPlatinum;
document.getElementById("pinkgold").innerHTML = MobilePrice.PinkGold;
document.getElementById("silver").innerHTML = MobilePrice.SilverTitanium;
document.getElementById("pName").innerHTML = mobileName;
document.getElementById("pPrice").innerHTML = MobilePrice.GoldPlatinum;
document.getElementById("pDiscount").innerHTML = MobileDiscount.GoldPlatinum;
document.getElementById("pAvailable").innerHTML = mobileStatus;
