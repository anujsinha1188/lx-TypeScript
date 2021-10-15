function fun(contact, name, defaultName) {
    if (defaultName === void 0) { defaultName = "Usopp"; }
    var restName = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        restName[_i - 3] = arguments[_i];
    }
    console.log("defaultName has: " + defaultName);
}
fun(1234567891, undefined, "Luffy", "Zoro", "Nami", "Sanji");
