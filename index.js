// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    const blocks = Math.abs(distance - 42);
    return blocks;
}
function distanceFromHqInFeet(distance) {
    const feet = distanceFromHqInBlocks(distance)*264;
    return feet;
}
function distanceTravelledInFeet(distance1, distance2){
    const totalFeet = Math.abs(distance1 - distance2)*264
    return totalFeet
}
function calculatesFarePrice(start, destination){
    const totalFeet = Math.abs(start - destination)*264
    let fare = 0;
    let flat = 25;
    let newFare = (totalFeet - 400) * .02
    if (totalFeet < 400) {
        return fare
    }
    else if (totalFeet >= 400 && totalFeet <=2000){
        return newFare
    }
    else if (totalFeet >= 2000 && totalFeet <=2500){
        return flat
    }
    else{
        return "cannot travel that far"
    }
}