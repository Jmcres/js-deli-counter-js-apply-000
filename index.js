function takeANumber(current, customer){
  current.push(customer);
  return "Welcome, " + customer + "."+" You are number " + (current.length) + " in line.";
}


function nowServing(currentLine){
  if(currentLine.length !== 0){
    var person = currentLine.shift();
    return 
  } else {
    return "There is nobody waiting to be served!";
  }
}