function takeANumber(katzDeliLineline, name){
  katzDeliLineline.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLineline.length} in line.`
}

function nowServing(katzDeliLineline){
  if (katzDeliLineline.length > 0){
    // some code to do what it says below
  }
} else {
  return "There is nobody waiting to be served!"
}

// Build a function nowServing. This function should:
// accept the current line of people (katzDeliLine) and return the first person in line and then remove that individual from the line.
// If there is nobody in line, it should return "There is nobody waiting to be served!"

// maybe an if/else, with array.length greater than 0 as the condition
