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

function currentLine (array){
  if(currentLine.length !== 0){
    var empty = [];
    for (var i = 0; i<array.length; i++){
   empty.push(" "+ (i+1) +". " + array[i]);
 }
 return "The line is currently:" + empty;
} else {
  return "The line is currently empty."
}
}