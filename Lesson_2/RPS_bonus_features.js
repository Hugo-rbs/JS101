/*
In this assignment, we'll build a Rock Paper Scissors game. Rock Paper Scissors is a simple game played between two opponents. 
Both the opponents choose an item from rock, paper, scissors, lizard, spock. The winner is decided according to the following rules:

- scissors cuts paper                             winning combos:
- paper covers rock                               - paper covers rock & disproves Spock
- rock crushes lizard                             - rock crushes lizard and crushes scissors 
- lizard poisons Spock                            - lizard poison Spock and eats paper
- spock smashes Scissors                          - spock smashes scissors ans vaporizes rock 
- scissors decapitates lizard                     - scissors decapitates lizard & cut paper
- lizard eats paper                               
- paper disproves Spock
- Spock vaporizes rock
- rock crushes scissors 

Lizard Spock This game is a variation on the Rock Paper Scissors game that adds two more options - Lizard and Spock. 
The goal of this bonus is to add Lizard and Spock to your game.

Shortened Input Typing the full word "rock" or "lizard" is tiring. 
Update the program so the user can type "r" for "rock," "p" for "paper," and so on. Note that if you do bonus #1, 
you'll have two words that start with "s." How do you resolve that?

Best of 5 Keep score of the player's and computer's wins. 
When either the player or computer reaches five wins, the match is over, and the winning player becomes the grand winner. 
Don't add your incrementing logic to displayResults. Keep your functions simple; they should perform one logical task — no more, no less.

ESLint complaints Run your program through ESLint to see what problems it identifies, and try to fix them.

*/

const readline = require('readline-sync');




