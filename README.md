# FlashCards Starter Kit
A solo project for Module Two at Turing by [Eric Sergeant](https://github.com/EricSergeant).

## Description
Get yourself ready for the big test or interview without the hassle of engaging graphics and flashy colors by running this flashcard application through your terminal!  This app runs through 30 flashcards and gives feedback on whether or not the correct answer was selected.  After running through the cards, you'll see the percentage correct as well as the amount of time you took to run through the cards. Set a personal record and try to beat it!

## Gameplay
You'll be propmted by each question to select an answer, make your choice, and receive feedback on whether you were right or wrong.

![flash cards example gif](https://media.giphy.com/media/40ZgXZrEGKDxrsLKTC/giphy.gif?cid=790b7611794d4dd1cb1285e034eddbb50f9efb0462cdb614&rid=giphy.gif&ct=g)

You can update the app with your own questions and answers by replacing or updating the objects in the data.js file.

## Technologies Used
- **JavaScript** - all coding done in JavaScript, using ES6 class and Test Driven Development (TDD).
- **Mocha** - the testing framework used for the TDD.
- **Chai** - the assertion library used with Mocha.
- **eslint** - the linter used for all *.js and *test.js files.
- **GitHub** - used to hold the repository, as well as the project board and issue-tracking log.  
- Full project spec can be found [here](https://frontend.turing.edu/projects/flash-cards.html) on Turing's page.

## How To Install and Play
Clone down this repo on GitHub.  Once you've cloned down the repo, change into the directory via your terminal and install the library dependencies by typing `npm install`.  Once that's complete, simply enter `node index.js` to start the game.  You will be prompted for each question, have the opportunity to select an answer, and will be given feedback on your answer. Press control-C to exit the game at any point. You will be able to play through the entire deck of cards and see your score of percentage of answers correct along with the amount of time you needed to complete the deck.  Enjoy!
