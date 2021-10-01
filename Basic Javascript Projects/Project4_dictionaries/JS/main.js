function my_computer() {
    var Computer = {
        CPU: "Ryzen 7",
        GPU: "1070 TI",
        RAM: "Corsair Vengence",
        Cooling: "Watercooled"
    };
    delete Computer.GPU;
 document.getElementById("my_computer").innerHTML = Computer.GPU;
}