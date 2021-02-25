/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary (secondary) {
  if (secondary === "orange") {
  return true;

  } else if (secondary === "purple")
  return true;

  else if (secondary === "green")
  return true;

  else if (secondary === "red")
  return false;

  else if (secondary === "black")
  return false;

  else if (secondary === "white")
  return false;

}



// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
