// Code your solution in this file!
const headquarters = 42
const location = 50

function distanceFromHqInBlocks(location) {
    if (location > headquarters) {
        return location - headquarters
    } else {
        return headquarters - location
    }
} 

function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location)
    let feetPerBlock = 264
    return blocks * feetPerBlock
}

function distanceTravelledInFeet(start, destination){
    let feetperBlock = 264
    let distanceinBlocks;
    if (start > destination) {
        distanceinBlocks = start - destination
    } else {
        distanceinBlocks = destination - start
    } 
    
    return distanceinBlocks * feetperBlock
} 

function calculatesFarePrice(start, destination){
    let feetPerBlock = 264
    let distanceinBlocks;
    if (start > destination) {
        distanceinBlocks = start - destination
    } else {
        distanceinBlocks = destination - start
    }   

    const distanceinFeet = distanceinBlocks * feetPerBlock

    if (distanceinFeet < 400) {
        return 0
    } else if (distanceinFeet > 400 && distanceinFeet <= 2000){
        return (distanceinFeet - 400) * 0.02
    } else if (distanceinFeet > 2000 && distanceinFeet <=2500){
        return 25
    } else ( distanceinFeet > 2500);{
        return "cannot travel that far"
    }
}
