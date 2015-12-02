


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
