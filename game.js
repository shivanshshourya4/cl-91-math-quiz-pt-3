function send()
{
num_1= document.getElementById("num_1").value;
num_2= document.getElementById("num_2").value;

actual_ans= parseInt(num_1) * parseInt(num_2);

question_number="<h1>" + num_1 + "&nbsp" + "X" + "&nbsp" +num_2 + "</h1>";
input_box= "<br> Answer : <input type='text' id='input_check_box'>";
check_box= "<br></br><button id='check_button' onclick='check();' style='border-radius:25px; border: hidden; background-color: darkcyan; color: orange; font-size: 30px;'>Check your answer</button>"+"<br>";

row= question_number + input_box + check_box;

document.getElementById("num_1").value= "";
document.getElementById("num_2").value= "";
document.getElementById("Ans_sec").innerHTML= row;
}


