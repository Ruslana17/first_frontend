let hello='Hello, what you name?';
let n=prompt(hello);

while(n=='' || n==null){
    n=prompt(hello);
}
alert (n + ', I thought of a number from 1 to 100. Try to guess it in the fewest possible attempts. After each attempt I will say "little", "a lot", or "guessed right".');

let number=Math.floor(Math.random()*101);
let guess=prompt('What number did I think?');
let numberOfGuesses=0;

while(guess!=number){
    numberOfGuesses++;

    if(guess>number){
        guess=prompt('A lot, try again');
    } else if (guess<number){
        guess=prompt('A little, try again');
    }
}
alert('You are win! It is number '+ number + '. You spend '+numberOfGuesses + ' tries.');
