const colors: string[] =["Red", "Blue"]; 
function fun() {
      setTimeout(() => {
        colors = ["Orange", "Yellow", "Green"];
    }, 10);
}
fun();
colors.push("White");
alert(colors);