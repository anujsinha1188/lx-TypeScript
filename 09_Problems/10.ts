function fun(contact: number, name?: string, defaultName: string = "Usopp", ...restName: string[]) {
    console.log("defaultName has: " + defaultName);
}
fun(1234567891, undefined, "Luffy", "Zoro", "Nami", "Sanji");