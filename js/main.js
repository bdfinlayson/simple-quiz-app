var score = 0;
var numCorrect = 0;
var index = 0;
var res;
var questionsAnswers = [
  [['What is the capitol of New Jersey?'], ['Trenton']],
  [[ 'What is the capitol of New York?'],['Albany']],
  [['What is the capitol of California?'], ['Sacremento']],
  [['What is the capitol of Nebraska?'], ['Lincoln']],
  [['What is the capitol of Texas?'], ['Austin']]
]
var rewardMessage = ['You suck!', 'Go back to school!', 'Nice try!', 'Not bad!', 'You are amazing!!!', 'Your knowledge of geography is astounding!!!'];

for (var i = 0; i < questionsAnswers.length; i++) {

  askQuestion(i);
  checkResponse();
  updatePage();

  if ( i === 4 ) {
    giveReward()
  }
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
  numCorrect +=1;
  console.log(score);
  console.log(numCorrect);
  printCongrats()

}

function decreaseScore() {

  score -= 1;
  console.log(score);
  printSorry();
}

function printCongrats() {

  alert('Correct! Your score has increased by 1! Your score is now ' + score + '!')
}

function printSorry() {

  alert('Bummer! We have subtracted a point from your score. Your score is now ' + score + ' :/');

}

function updatePage() {

  clear();
  var $body = $('body');

  $body.append('<div><p>' + "Your score is: " + score + '</p></div>');

}

function clear() {

  $('div').remove();
  $('p').remove();

}

function giveReward() {


  $('div').append('<div><h2>' + rewardMessage[numCorrect] + '</h2></div>');

}
