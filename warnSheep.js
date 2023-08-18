// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1


function warnTheSheep(queue) {
  let sheepPos = queue.length - queue.indexOf("wolf") - 1
  if(queue[queue.length-1] === "wolf"){
    return "Pls go away and stop eating my sheep"
  } else {
    return `Oi! Sheep number ${sheepPos}! You are about to be eaten by a wolf!`
  }
}