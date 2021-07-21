var player1_name= localStorage.getItem("name1");
var player2_name= localStorage.getItem("name2");

var player1_score= 0;
var player2_score= 0;

document.getElementById("player1_name").innerHTML = player1_name+ " : ";
document.getElementById("player2_name").innerHTML = player2_name+ " : ";
document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML= "Question turn - "+ player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn - "+ player2_name;
var number_1=0;
var number_2=0;
var actual_output= 0;

function send(){
     number_1= Number(document.getElementById("number_1_input").value);
    number_2= Number(document.getElementById("number_2_input").value);
     actual_output= number_1 * number_2;
    console.log(actual_output);


    question_number = number_1 + " x " + number_2 ; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_number + input_box + check_button ;
     document.getElementById("output").innerHTML = row; 

}

var question_turn= player1_name;
var answer_turn= player2_name;





function check(){
    var get_answer= Number(document.getElementById("input_check_box").value);
    console.log("answer in lowercase"+ get_answer);
    
 
    if(get_answer==actual_output){
            if(answer_turn==player1_name){
            player1_score= player1_score+1;
            console.log(player1_score);
            document.getElementById("player_1_score").innerHTML= player1_score;
        }
        else{
            player2_score= player2_score+1;
            console.log(player2_score);
            document.getElementById("player_2_score").innerHTML= player2_score;
        }
    }

    if(question_turn==player1_name)
    {
        question_turn= player2_name;
        document.getElementById("player_question").innerHTML = "Question turn -"+ question_turn;
    }
    else
    {
        question_turn= player1_name;
        document.getElementById("player_question").innerHTML = "Question turn -"+ question_turn;   
    }

    if(answer_turn==player2_name)
    {
        answer_turn= player1_name;
        document.getElementById("player_answer").innerHTML = "Answer turn -"+ answer_turn;
    }
    else
    {
        answer_turn= player2_name;
        document.getElementById("player_answer").innerHTML = "Answer turn -"+ answer_turn;   
    }
   
    document.getElementById("output").innerHTML="";

}