function addUser()
{
    number1_name = document.getElementById("number1_name_input").value;
    number2_name = document.getElementById("number2_name_input").value;

    localStorage.setItem("number1",number1_name);
    localStorage.setItem("number2",number2_name);

    window.location = "game.html";

}