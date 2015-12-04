


var user = prompt('What is your name?')
console.log('the user variable ' + user);
alert('Nice to virtually meet you, ' +  user + ', hope you are having a great day!')

//beginning of guessing game portion
var one = document.getElementById('one');
var i = 0;
function quesOne(){

  var like = prompt('Do dogs bark?');
    if(like == 'yes' || like == 'YES' || like == 'Yes' || like == 'Y' || like == 'y')
    {
      // alert('You are right! Dogs do bark!');
      i++;
      console.log('var i = ' + i);
      one.textContent = ('You are right! Dogs do bark!');
      // console
    }
    else {
      // alert('You are incorrect, dogs do bark.');
      one.textContent = ('You are incorrect, dogs do bark.')
    }
}
quesOne();

var one = document.getElementById('two');
function quesTwo() {

    var have = prompt('Does Starbucks sell coffee?');
    if(have == 'yes' || have == 'YES' || have == 'Y' || have == 'y' || have == 'Yes')
    {
      // alert('You are right! Starbucks does sell coffee!');
      i++;
      console.log('var i = ' + i);
      one.textContent = 'You are right! Starbucks does sell coffee!'
    }
    else{
      // alert('Hmm, have you ever been to Starbucks? They sell a lot of coffee!');
      one.textContent = ('Hmm, have you ever been to Starbucks? They sell a lot of coffee!')

    }
  }
quesTwo();

var one = document.getElementById('three');
function quesThree(){

    var want = prompt('Is Seattle in Washington?')
    if(want == 'yes' || want == 'Yes' || want == 'YES' || want == 'Y' || want == 'y')
    {
      // alert('You are right! Seattle is in Washington');
      i++;
      console.log('var i = ' + i);
      one.textContent = ('You are right! Seattle is in Washington')
    }
    else{
      // alert('You are incorrect Seattle is in Washington.');
      one.textContent = ('You are incorrect, Seattle is in Washington')
    }
  }
quesThree();


var total = i;
console.log('total = ' + i)
alert('You have answered ' + i + ' out of 3 correct!')


// while loop portion

alert('I am thinking of a number...');
console.log('var user = ' + guess);
var guess = prompt('Can you guess what it is?');

var one = document.getElementById('four');
function quesFour(){

    var i = 3;
    var msg = ' ';

        while(guess > i)
        {
          msg = ' you guessed ' + guess + ', that is too high ';
          one.textContent = (user + msg);
          guess = prompt(' guess again! ');
        }

        while(guess < i)
        {
          msg = ' you guessed ' + guess + ', that is too low ';
          one.textContent = (user + msg);
          guess = prompt(' guess again! ');
        }

        if(guess == i)
        {
          var answer = one.textContent = ('you are right, my number is 3! lets move on!');
        }
    }
  quesFour();

// for loop portion

var transportation = prompt('What is the best way of transportation for Seattlites?');
var arr = ['car', 'bus', 'bike', 'walk'];

var one = document.getElementById('five');
function quesFive(){

      for (var i = 0; i < arr.length; i++)
      {

        if (transportation == 'car' || transportation == 'cars' || transportation == 'driving'){
          one.textContent = ('You said ' + transportation + ' is the best way to get around Seattle!');
          break;
        }
        if (transportation == 'bus' || transportation == 'busses' || transportation == 'bussing'){
          one.textContent = ('You said ' + transportation + ' is the best way to get around Seattle!');
          break;
        }
        if (transportation == 'bike' || transportation == 'bikes' || transportation == 'biking'){
          one.textContent = ('You said ' + transportation + ' is the best way to get around Seattle!');
          break;
        }
        if (transportation == 'walk' || transportation == 'foot' || transportation == 'walking'){
          one.textContent = ('You said ' + transportation + ' is the best way to get around Seattle!');
          break;
        }
        else {
          one.textContent = ('You said ' + transportation + '. That is an interesting choice of transportation')
        }
      }
    }
  quesFive();
