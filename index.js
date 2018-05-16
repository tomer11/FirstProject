// PAGE 1 ---------------------------------------

window.onload = function() {
    var lotoNumbers = [];
    var selectedNumbers = [];
    var resultRef = document.getElementById('result');
    var btn = document.getElementById('generate');
    
    btn.addEventListener("click", function() {
        generate();
    })

  function generate() {
      selectedNumbers = [];
      lotoNumbers = [];
      generateNumbers();
      for(var i=1;i<=6;i++){
          generateBall();
      }
      printNumbers()
  }
    
    function generateNumbers() {
        for(var i=1;i<=39;i++){
            lotoNumbers.push(i);
        }
    }

function generateBall() { //black box!!!!!!!!!
    var ballIndex = Math.floor((Math.random() * lotoNumbers.length -1) + 1);
    var number = lotoNumbers[ballIndex];
    selectedNumbers.push(number);
    lotoNumbers.splice(ballIndex, 1);
}

function printNumbers() {
    resultRef.innerHTML = "The numbers are: "+ selectedNumbers + "</br>";
    
}
}



