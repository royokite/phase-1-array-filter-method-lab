// Array filter method lab!

function findMatching(drivers, nameFilter) {
    return drivers.filter(driverName => driverName.toLowerCase()===nameFilter.toLowerCase());
}

function fuzzyMatch(drivers, stringSearch) {
    return drivers.filter(driverName => driverName.slice(0, stringSearch.length).includes(stringSearch));
}

function matchName(drivers, driverName) {
    return drivers.filter(driver => driver.name===driverName);
}
