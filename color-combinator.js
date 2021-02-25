/******************
 * YOUR CODE HERE *
 ******************/

function colorCombinator (combine) {
  if (combine === "red", "yellow") {
  return "orange";
  }
  else if (combine === "yellow", "red")
  return "orange";
  
  else if (combine === "red", "blue")
  return "purple";
  
  else if (combine === "blue", "red")
  return "purple";

  else if (combine === "yellow", "blue")
  return "purple";

  else if (combine === "blue", "yellow")
  return "green";

  else if (combine === "yellow", "blue")
  return "green";
}


// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
