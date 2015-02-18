var score = 0;
var index = 0;
var res;
var questionsAnswers = [
  [['What is the capitol of New Jersey?'], ['Trenton']],
  [[ 'What is the capitol of New York?'],['Albany']],
  [['What is the capitol of California?'], ['Sacremento']],
  [['What is the capitol of Nebraska?'], ['Lincoln']],
  [['What is the capitol of Texas?'], ['Austin']]
]

for (var i = 0; i < questionsAnswers.length; i++) {

  askQuestion(i);
  checkResponse();
  updatePage();

}

function askQuestion() {

  res = prompt(questionsAnswers[i][0])

  console.log(res)
}

function checkResponse() {

  console.log(questionsAnswers[index][1].toString());
  if (res === questionsAnswers[index][1].toString()) {

    increaseScore();

  } else(decreaseScore())

     index +=1
}


function increaseScore() {

  score += 1;
  console.log(score);
  printCongrats()

}

function decreaseScore() {

  score -= 1;
  console.log(score);
  printSorry();
}

function printCongrats() {

  alert('Correct!')
}

function printSorry() {

  alert('Bummer!');

}

function updatePage() {

  clear();
  var $body = $('body');

  $body.append('<div><p>' + "Your score is: " + score + '</p></div>');

}

function clear() {

  $('p').remove();

}
