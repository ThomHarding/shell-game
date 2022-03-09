| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        2 |
| See three cups, with a button beneath each of them.                               |        2 |

| Events . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On clicking a cup button, the total number of guesses increment                         |        2 |
| On clicking the correct cup button, the total number of correct guesses increment                       |        2 |
| On clicking the incorrect cup button, the number of incorrect guesses increments                       |        2 |
| On click, see the correct cup's image change, clearing out the previous correct guess style|2|

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| IMPURE: `resetStyles()` | 2 |
| IMPURE: `getRandomItem(arr) : returns random item from given array` | 2 |
| IMPURE: `handleGuess(userGuess, correctSpot)` | 4 |
  

## Events
- User clicks any of the three cup buttons
  - (reset image of all cups)
  - Set State
    - Increment total attempts
    - Use Math.random() to decide which cup is correct
    - We need to compare the correct cup with the cup the user clicked
      - If the user clicked the correct cup, increment win
      - (optionally: If the user did NOT click the correct cup, increment loss)
  - Update DOM
    - Change image of correct cup
    - Change numbers in winEl, lossEl, and totalEl

## Ideas for stretch goals
- Add a hard reset button that clears all wins, losses, and total
- Add a 'try again' button users must press to clear styles instead of just resetting automatically between rounds. Disable buttons between turns
- Let the user choose how many cups they have to choose from
- Set up animations so the cups lift up to reveal whether or not they contain the ball
- Set it up so that more than one cup (or even no cups) might contain a ball
- Add a dropdown to let the user choose different domains for the game: cup game, which piñata contains the candy, which card is the queen of spades
