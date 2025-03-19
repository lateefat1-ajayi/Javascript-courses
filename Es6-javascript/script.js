//MODULES
import {simpleInterest, circleAreaCircum} from "./math.js";

//calculate simple interest on the principal #50,000. provided that the rate is 5% for a period of 2 years.

const accumulatedInterest = simpleInterest(50000, 5, 2, "month")

console.log({accumulatedInterest})

//radius = 10cm
const area = circleAreaCircum(10, "area")
console.log(area)

const circum = circleAreaCircum(10, "circum")
console.log(circum) 

const circumArea = circleAreaCircum(10, "areacircum")
console.log(circumArea)

