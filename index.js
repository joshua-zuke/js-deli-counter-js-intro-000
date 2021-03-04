function takeANumber(katzDeliLineline, name){
  for (let i = 1; i < katzDeliLineline.length; i++){
    katzDeliLineline.push(name)
  }
    return `Welcome, ${name}. You are number ${i} in line.`
}
