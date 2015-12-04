


var user = prompt('What is your name?')
console.log('the user variable ' + user);
alert('Nice to virtually meet you, ' +  user + ', hope you are having a great day!')

//beginning of guessing game portion

var i = 0;
var like = prompt('Do dogs bark?');
    if(like == 'yes' || like == 'YES' || like == 'Yes' || like == 'Y' || like == 'y')
    {
      alert('You are right! Dogs do bark!');
      i++;
      console.log('var i = ' + i);
    }
    else {
      alert('You are incorrect, dogs do bark.');
    }


var have = prompt('Does Starbucks sell coffee?');
    if(have == 'yes' || have == 'YES' || have == 'Y' || have == 'y' || have == 'Yes')
    {
      alert('You are right! Starbucks does sell coffee!');
      i++;
      console.log('var i = ' + i);
    }
    else{
      alert('Hmm, have you ever been to Starbucks? They sell a lot of coffee!');
    }

var want = prompt('Is Seattle in Washington?')
    if(want == 'yes' || want == 'Yes' || want == 'YES' || want == 'Y' || want == 'y')
    {
      alert('You are right! Seattle is in Washington');
      i++;
      console.log('var i = ' + i);
    }
    else{
      alert('You are incorrect Seattle is in Washington.');
    }


var total = i;
console.log('total = ' + i)
alert('You have answered ' + i + ' out of 3 correct!')

// while loop portion

alert('I am thinking of a number...');
console.log('var user = ' + guess);
var guess = prompt('Can you guess what it is?');

var i = 3;
var msg = ' ';

    while(guess > i)
    {
      msg = ' you guessed ' + guess + ', that is too high ';
      alert(user + msg);
      guess = prompt(' guess again! ');
    }

    while(guess < i)
    {
      msg = ' you guessed ' + guess + ', that is too low ';
      alert(user + msg);
      guess = prompt(' guess again! ');
    }

    if(guess == i)
    {
      var answer = alert('you are right! lets move on!');
    }


// for loop portion

  var transportation = prompt('What is the best way of transportation for Seattlites?');
  var arr = ['car', 'bus', 'bike', 'walk'];

  for (var i = 0; i < arr.length; i++)
  {

    if (transportation == 'car' || transportation == 'cars' || transportation == 'driving'){
      alert('You said ' + transportation + ' is the best way to get around Seattle!');
      break;
    }
    if (transportation == 'bus' || transportation == 'busses' || transportation == 'bussing'){
      alert('You said ' + transportation + ' is the best way to get around Seattle!');
      break;
    }
    if (transportation == 'bike' || transportation == 'bikes' || transportation == 'biking'){
      alert('You said ' + transportation + ' is the best way to get around Seattle!');
      break;
    }
    if (transportation == 'walk' || transportation == 'foot' || transportation == 'walking'){
      alert('You said ' + transportation + ' is the best way to get around Seattle!');
      break;
    }
  }
