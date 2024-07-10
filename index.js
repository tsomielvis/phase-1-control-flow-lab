function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  } else {
    return "Distance not recognized";
  }
}
function ternaryCheckCity(destination) {
  return destination === 'NYC' ? "Ok, sounds good." : "No go.";
}
function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
