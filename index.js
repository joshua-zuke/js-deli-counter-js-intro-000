function takeANumber(katzDeliLineline, name){
  katzDeliLineline.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLineline.length} in line.`
}

function nowServing(katzDeliLineline){
  if (katzDeliLineline.length > 0){
    return `Currently serving ${katzDeliLineline[0]}.`
    katzDeliLineline.slice(1, katzDeliLineline)
  } else {
  return "There is nobody waiting to be served!"
}
}

kittens.slice(0, kittens.length-1)


// Build a function nowServing. This function should:
// accept the current line of people (katzDeliLine) and return the first person in line and then remove that individual from the line.
