var fizzbuzz = function(num) {
    if(num % 3 === 0 && num % 5 > 0) {
        return 'fizz';
    }
    else if (num % 5 === 0 && num % 3 > 0) {
        return 'buzz';
    }
    else if (num % 5 === 0 && num % 3 === 0) {
        return 'fizzbuzz';
    }
    else
    {
        return num;
    }

};


/*
'fizz' if the number is divisible by 3 (but not 5)
'buzz' if the number is divisible by 5 (but not 3)
'fizzbuzz' if the number is divisible by both 3 and 5
the number itself if it isn't divisible by either 3 or 5
*/
