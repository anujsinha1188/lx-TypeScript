let mobileName: string = "Samsung M01";
let mobilePrice: string = "300";
let mobileStatus: string = "Available";
enum MobilePrice { GoldPlatinum = "59000", PinkGold = "60200", SilverTitanium = "60200" }
enum MobileDiscount { GoldPlatinum = "15%", PinkGold = "18%", SilverTitanium = "20%" }
document.getElementById("gold").innerHTML = MobilePrice.GoldPlatinum;
document.getElementById("pinkgold").innerHTML = MobilePrice.PinkGold;
document.getElementById("silver").innerHTML = MobilePrice.SilverTitanium;
document.getElementById("pName").innerHTML = mobileName;
document.getElementById("pPrice").innerHTML = MobilePrice.GoldPlatinum;
document.getElementById("pDiscount").innerHTML = MobileDiscount.GoldPlatinum;
document.getElementById("pAvailable").innerHTML = mobileStatus;