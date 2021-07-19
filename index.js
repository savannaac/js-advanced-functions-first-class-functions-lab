const returnFirstTwoDrivers = function(array) { return array.slice(0, 2); }
const returnLastTwoDrivers = function(array) { return array.slice(-2); }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function(num) {
    return function(multiplier) {
        return num * multiplier;
    }
}
// function createFareMultiplier(num) {
//     return function(multiplier) {
//         return num * multiplier;
//     }
// }
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    const differentDrivers = returnFirstTwoDrivers(drivers)
    return differentDrivers
}