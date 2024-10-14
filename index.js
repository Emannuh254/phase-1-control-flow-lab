// 1. scuberGreetingForFeet()
// This function returns a message based on the distance traveled.
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!"; // Free rides for distances 400 feet or less
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks."; // Rides between 2000 and 2500 feet cost $30
  } else if (distance > 2500) {
    return "No can do."; // Rides over 2500 feet are not allowed
  } else {
    return "That will be twenty bucks."; // Rides between 400 and 2000 feet cost $20
  }
}

// 2. ternaryCheckCity()
// This function checks if the city is 'NYC' and returns a response using a ternary operator.
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; 
  // If the city is NYC, return 'Ok, sounds good.', otherwise return 'No go.'
}

// 3. switchOnCharmFromTip()
// This function returns a different response based on the tip provided using a switch statement.
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much!';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
} //done
