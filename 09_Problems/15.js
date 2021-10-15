function changeNationality(data) {
    nationality += " " + data;
    return nationality;
}
var nationality = "Indian";
nationality = changeNationality("Canadian");
console.log(nationality);
