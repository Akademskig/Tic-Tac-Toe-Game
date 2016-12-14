  $(document).ready(function(){
  var xo;
  var comp;
  var x = 0;
  
  $(".x").on("click", function() {
    xo = "x";
    comp = "o";
    $(".select,.x,.o").removeClass("anim");
      
  })  
  $(".o").on("click", function() {
    xo = "o";
    comp = "x";
    $(".select,.x,.o").removeClass("anim");   
    console.log(x);
  })
  console.log(x);
 
  $(".x,.o").on("click", function() {

    var Complay;
    //putting all win combinations into an array
    var arrInd = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    var h = 0;
    var j = -1;
    var board = [];

    $(".oo").on("click", function() {
      if (board[0] != xo && board[0] != comp) {
        board[0] = xo;
        $(".oo").html(xo);
        $(".oo").removeClass("c");
        h = 0;
        j = -1;
        return Complay(arrInd[h], comp);
      }
    })
    
    $(".ot").on("click", function() {
      if (board[1] != xo && board[1] != comp) {
        board[1] = xo;
        $(".ot").html(xo);
        $(".ot").removeClass("c");
        h = 0;
        j = -1;
        return Complay(arrInd[h], comp);
      }
    })
    
    $(".oth").on("click", function() {
      if (board[2] != xo && board[2] != comp) {
        board[2] = xo;
        $(".oth").html(xo);
        $(".oth").removeClass("c");
        h = 0;
        j = -1;
        return Complay(arrInd[h], comp);
      }
    })
    
    $(".to").on("click", function() {
      if (board[3] != xo && board[3] != comp) {
        $(".to").html(xo);
        board[3] = xo;
        $(".to").removeClass("c");
        h = 0;
        j = -1;
        return Complay(arrInd[h], comp);
      }
    })
    
    $(".tt").on("click", function() {
      if (board[4] != xo && board[4] != comp) {
        $(".tt").html(xo);
        board[4] = xo;
        $(".tt").removeClass("c");
        h = 0;
        j = -1;
        return Complay(arrInd[h], comp);
      }
    })
    
    $(".tth").on("click", function() {
      if (board[5] != xo && board[5] != comp) {
        $(".tth").html(xo);
        board[5] = xo;
        $(".tth").removeClass("c");
        h = 0;
        j = -1;
        return Complay(arrInd[h], comp);
      }
    })
    
    $(".tho").on("click", function() {
      if (board[6] != xo && board[6] != comp) {
        $(".tho").html(xo);
        board[6] = xo;
        $(".tho").removeClass("c");
        h = 0;
        j = -1;
        return Complay(arrInd[h], comp);
      }
    })
    
    $(".tht").on("click", function() {
      if (board[7] != xo && board[7] != comp) {
        $(".tht").html(xo);
        board[7] = xo;
        $(".tht").removeClass("c");
        h = 0;
        j = -1;
        return Complay(arrInd[h], comp);
      }
    })
    
    $(".thth").on("click", function() {
      if (board[8] != xo && board[8] != comp) {
        $(".thth").html(xo);
        board[8] = xo;
        $(".thth").removeClass("c");
        h = 0;
        j = -1;
        return Complay(arrInd[h], comp);
      }
    })

    function Complay(arr, move) {
      var indxo = board.indexOf(xo);
      if (board[arr[0]] == board[arr[1]]) {
        if (board[arr[2]] != xo && board[arr[2]] != comp) {
          if (board[arr[1]] == move) {
            board[arr[2]] = comp;
            console.log("MOve:" + move);
            return board;
          }
        }
      }
      
      if (board[arr[0]] == board[arr[2]]) {
        if (board[arr[1]] != xo && board[arr[1]] != comp) {
          console.log("MOve:" + move);
          if (board[arr[2]] == move) {
            board[arr[1]] = comp;
            return board;
          }
        }
      }
      
      if (board[arr[1]] == board[arr[2]]) {
        if (board[arr[0]] != xo && board[arr[0]] != comp) {
          console.log("MOve:" + move);
          console.log(board[arr[2]] == move);
          console.log(board);
          if (board[arr[2]] == move) {
            board[arr[0]] = comp;
            return board;
          }
        }
      }

      if (h < 7) {
        console.log("h = " + h);
        h = h + 1;
        console.log("COmp:" + comp + h);
        return Complay(arrInd[h], comp);
      }
      
      if (j < 7) {
        j = j + 1;
        return Complay(arrInd[j], xo);
        console.log("xo:" + xo);
      }
      
      if (board.indexOf(comp) == -1) {
        switch (indxo) {
          case (4):
            board[0] = comp;
            return board;
          case (1):
            board[6] = comp;
            return board;
          case (3):
            board[2] = comp;
            return board;
          case (5):
            board[0] = comp;
            return board;
          case (7):
            board[0] = comp;
            return board;
          case (indxo):
            board[8 - indxo] = comp;
            return board;
            console.log("inx" + board.indexOf(xo));
            console.log(board);
        }
      } 
      else if (board[4] != xo && board[4] != comp) {
        board[4] = comp;
        return board;
      } 
      else if (board[0] != xo && board[0] != comp) {
        board[0] = comp;
        return board;
      } 
      else if (board[2] != xo && board[2] != comp) {
        board[2] = comp;
        return board;
      } 
      else if (board[6] != xo && board[6] != comp) {
        board[6] = comp;
        return board;
      } 
      else if (board[8] != xo && board[8] != comp) {
        board[8] = comp;
        return board;
      } 
      else if (board[1] != xo && board[1] != comp) {
        board[1] = comp;
        return board;
      } 
      else if (board[3] != xo && board[3] != comp) {
        board[3] = comp;
        return board;
      } 
      else if (board[5] != xo && board[5] != comp) {
        board[5] = comp;
        return board;
      } 
      else if (board[7] != xo && board[7] != comp) {
        board[7] = comp;
        return board;
      }
    }
    
    $(".box").on("click", function() {
      if (board[0]) {
        $(".oo").html(board[0]);
        $(".oo").removeClass("c");
      }
      if (board[1]) {
        $(".ot").html(board[1]);
        $(".ot").removeClass("c");
      }
      if (board[2]) {
        $(".oth").html(board[2]);
        $(".oth").removeClass("c");
      }
      if (board[3]) {
        $(".to").html(board[3]);
        $(".to").removeClass("c");
      }
      if (board[4]) {
        $(".tt").html(board[4]);
        $(".tt").removeClass("c");
      }
      if (board[5]) {
        $(".tth").html(board[5]);
        $(".tth").removeClass("c");
      }
      if (board[6]) {
        $(".tho").html(board[6]);
        $(".tho").removeClass("c");
      }
      if (board[7]) {
        $(".tht").html(board[7]);
        $(".tht").removeClass("c");
      }
      if (board[8]) {
        $(".thth").html(board[8]);
        $(".thth").removeClass("c");
      }
    })
    
    var stop;

    function clear() {
      $(".box").html("-");
      $(".box").addClass("c");
      $(".overlay").empty();
      board = [];
      window.clearTimeout(stop);
      $(".select,.x,.o").addClass("anim");     
    }
 
    $(".box").on("click", function() {
      if ((board[0] == board[1]) && (board[1] == board[2]) && (board[2] == xo || board[2] == comp)) {
        $(".overlay").html("<div class=\"linehortop\"></div>");
        if (board[2] == xo) {
          $(".overlay").append("<div class=\"win\">You win!</div>");
        }
        if (board[2] == comp) {
          $(".overlay").append("<div class=\"lose\">You lose!</div>");
        }
        stop = window.setTimeout(clear, 5000);
        return 0;
      }
      
      if ((board[3] == board[4]) && (board[4] == board[5]) && (board[5] == xo || board[5] == comp)) {
        $(".overlay").html("<div class=\"linehorcent\"></div>");
        if (board[5] == xo) {
          $(".overlay").append("<div class=\"win\">You win!</div>");
        }
        if (board[5] == comp) {
          $(".overlay").append("<div class=\"lose\">You lose!</div>");
        }
        stop = window.setTimeout(clear, 5000);
        return 0;
      }
      
      if ((board[6] == board[7]) && (board[7] == board[8]) && (board[8] == xo || board[8] == comp)) {
        $(".overlay").html("<div class=\"linehorbot\"></div>");
        if (board[8] == xo) {
          $(".overlay").append("<div class=\"win\">You win!</div>");
        }
        
        if (board[8] == comp) {
          $(".overlay").append("<div class=\"lose\">You lose!</div>");
        }
        stop = window.setTimeout(clear, 5000);
        return 0;
      }
      
      if ((board[0] == board[3]) && (board[3] == board[6]) && (board[6] == xo || board[6] == comp)) {
        $(".overlay").html("<div class=\"linevertleft\"></div>");
        if (board[6] == xo) {
          $(".overlay").append("<div class=\"win\">You win!</div>");
        }
        if (board[6] == comp) {
          $(".overlay").append("<div class=\"lose\">You lose!</div>");
        }
        stop = window.setTimeout(clear, 5000);
        return 0;
      }
      
      if ((board[1] == board[4]) && (board[4] == board[7]) && (board[7] == xo || board[7] == comp)) {
        $(".overlay").html("<div class=\"linevertcent\"></div>");
        if (board[7] == xo) {
          $(".overlay").append("<div class=\"win\">You win!</div>");
        }
        if (board[7] == comp) {
          $(".overlay").append("<div class=\"lose\">You lose!</div>");
        }
        stop = window.setTimeout(clear, 5000);
        return 0;
      }
      
      if ((board[2] == board[5]) && (board[5] == board[8]) && (board[8] == xo || board[8] == comp)) {
        $(".overlay").html("<div class=\"linevertright\"></div>");
        if (board[8] == xo) {
          $(".overlay").append("<div class=\"win\">You win!</div>");
        }
        if (board[8] == comp) {
          $(".overlay").append("<div class=\"lose\">You lose!</div>");
        }
        stop = window.setTimeout(clear, 5000);
        return 0;
      }
      
      if ((board[0] == board[4]) && (board[4] == board[8]) && (board[8] == xo || board[8] == comp)) {
        $(".overlay").html("<div class=\"linediagonallr\"></div>");
        if (board[8] == xo) {
          $(".overlay").append("<div class=\"win\">You win!</div>");
        }
        if (board[8] == comp) {
          $(".overlay").append("<div class=\"lose\">You lose!</div>");
        }
        stop = window.setTimeout(clear, 5000);
        return 0;
      }
      if ((board[2] == board[4]) && (board[4] == board[6]) && (board[6] == xo || board[6] == comp)) {
        $(".overlay").html("<div class=\"linediagonalrl\"></div>");
        if (board[6] == xo) {
          $(".overlay").append("<div class=\"win\">You win!</div>");
        }
        if (board[6] == comp) {
          $(".overlay").append("<div class=\"lose\">You lose!</div>");
        }
        stop = window.setTimeout(clear, 5000);
        return 0;

      }
      if (board[0] && board[1] && board[2] && board[3] && board[4] && board[5] && board[6] && board[7] && board[8]) {
        $(".overlay").html("<div class=\"win\">It's a draw!</div>");
        stop = window.setTimeout(clear, 3000);
        return 0;
      }
    })
    $(".clear").on("click", clear);
    })
})