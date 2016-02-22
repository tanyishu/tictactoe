function callThisFunctionWhenDOMLoaded() {
    console.log("Tic Tac Toe Ready.");
    var currentPlayer = 'player1';
    var buttons = document.getElementsByTagName('button');
    var board = [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ];
   for(var i = 0; i < buttons.length; i++){
     buttons[i].addEventListener('click', changeColor);
   }

  function changeColor(event) {
    console.log('clicked');
    console.log(event.target.id);
    var buttonId = event.target.id;
    var button = document.getElementById(buttonId);

      if (currentPlayer == 'player1') {
         button.innerHTML = 'O';
         button.style.background= 'red';
         setMove('O', buttonId);
         winner();
         currentPlayer= 'player2';
       } else {
         button.innerHTML = 'X';
         button.style.background= 'blue';
         setMove('X', buttonId);
         winner();
         currentPlayer= 'player1';
       }
  }
     function setMove(move, buttonId) {
       if (buttonId ==='b1'){
         board[0][0] = move;
       } else if (buttonId ==='b2'){
         board[0][1] = move;
       }
       else if (buttonId ==='b3'){
         board[0][2] = move;
       }
       else if (buttonId ==='b4'){
         board[1][0] = move;
       }
       else if (buttonId ==='b5'){
         board[1][1] = move;
       }
       else if (buttonId ==='b6'){
         board[1][2] = move;
       }
       else if (buttonId ==='b7'){
         board[2][0] = move;
       }
       else if (buttonId ==='b8'){
         board[2][1] = move;
       }
       else {
         board[2][2] = move;
       }
       console.log(board);
     }
      function winner(){
        if ( (board[0][0] == board[0][1]) &&(board[0][1] == board[0][2]) && (board[0][0]) !=null ){
          alert('You Win !');
          }

         else if ( (board[1][0] == board[1][1]) &&(board[1][1] == board[1][2]) && (board[1][0] !=null)) {
          alert('You Win !');
          }

        else if ( (board[2][0] == board[2][1]) &&(board[2][1] == board[2][2]) && (board[2][0] !=null) ){
          alert('You Win !');
          }

        else if ( (board[0][0] == board[1][0]) &&(board[1][0] == board[2][0]) && (board[0][0] !=null) ){
          alert('You Win !');
          }

        else if ( (board[0][1] == board[1][1]) &&(board[1][1] == board[2][1]) && (board[0][1]) !=null ){
          alert('You Win !');
          }

        else if ( (board[0][2] == board[1][2]) &&(board[1][2] == board[2][2]) && (board[0][2] !=null) ){
          alert('You Win !');
          }

        else if ( (board[0][0] == board[1][1]) &&(board[1][1] == board[2][2]) && (board)[0][0] !=null ){
          alert('You Win !');
          }

        else if ( (board[0][2] == board[1][1]) &&(board[1][1] == board[2][0]) && (board)[0][2] !=null  ){
          alert('You Win !');
          }
//         else{
//           alert('No Winner');
//         }
      }
 }
window.addEventListener("load",callThisFunctionWhenDOMLoaded,false);
