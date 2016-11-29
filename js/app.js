function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
    let playerWins = 0;
    let computerWins = 0;

$(document).ready(function(){

    //image clicked
    $("img").click(function(){
    //get the id of the image clicked
   let playerRandom = $(this).attr("id");
   //get the computers hand
   let computerRandom = getRandom(1, 4);

   let value = ["rock", "paper", "scissors"];

    console.log("Player:" + value[playerRandom - 1]);
    console.log("Player:" + (playerRandom - 1));
    console.log("Computer:" + value[computerRandom - 1]);
    console.log("Computer:" + (computerRandom - 1));
    //see who wins
    if(playerRandom == 1 && computerRandom == 3){
        playerWins ++;
        $(".playerWins").html(playerWins);
        $(".winner").html("Player Wins!");
    }else if(playerRandom == 3 && computerRandom == 1){
        computerWins ++;
        $(".computerWins").html(computerWins);
        $(".winner").html("Computer Wins!");
    }else if(playerRandom == 2 && computerRandom == 1){
        playerWins ++;
        $(".playerWins").html(playerWins);     
        $(".winner").html("Player Wins!");   
    }else if(playerRandom == 1 && computerRandom == 2){
        computerWins ++;
        $(".computerWins").html(computerWins);
        $(".winner").html("Computer Wins!");
    }else if(playerRandom == 3 && computerRandom == 2){
        playerWins ++;
        $(".playerWins").html(playerWins);
        $(".winner").html("Player Wins!");
    }else if(playerRandom == 2 && computerRandom == 3){
        computerWins ++;
        $(".computerWins").html(computerWins);
        $(".winner").html("Computer Wins!");
    }else{
        $(".winner").html("Draw");        
    }

    });
});
