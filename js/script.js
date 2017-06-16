var Player=function(numbers,scores){

  this.numbers=numbers;
  this.scores=scores;
}
var score=0;
$(document).ready(function(){
  $("form.gameform").submit(function(event){
    event.preventDefault();
    /*var playername= $("input#nameinfo").val();*/

  })
  /*click function for player1 roll*/
  $("button#rollbutton").click(function(){
    var number =Math.floor((Math.random() * 6) + 1);

    if(number>1){
       score +=number;
    }
    else{
       score=0;
      alert("PLAYER 2 START");
    }
var player1= new Player(number,score);
    $("ul#finalresults").text("you rolled"+" " +player1.numbers);
    $("ul#score").text("your current score is"+" " +player1.scores);

  })

  $("button#rollbutton2").click(function(){
    var number =Math.floor((Math.random() * 6) + 1);

    if(number>1){
       score +=number;
    }
    else{
       score=0;
      alert("PLAYER 1 START");
    }
var player2= new Player(number,score);
    $("ul#finalresults2").text("you rolled"+" " +player2.numbers);
    $("ul#score2").text("your current score is"+" " +player2.scores);

  })

});
