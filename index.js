function findMatching(driversList, string){
    return driversList.filter(function (drivers) {
        return (drivers.toUpperCase() == string.toUpperCase())
    })
}

function fuzzyMatch(driversList, string){
    return driversList.filter(function (drivers) {
        return (drivers[0] == string[0])
    })
}

function matchName(driverList, string) {
    return driverList.filter(function (drivers) {
        return (drivers.name == string)
    })
}