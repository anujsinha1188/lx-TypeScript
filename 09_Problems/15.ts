function changeNationality(data: string): string {
    nationality += " " + data;
    return nationality;
}
let nationality = "Indian";
nationality = changeNationality("Canadian");
console.log(nationality);