const createEmployeeRecord = (row) => {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = (array) => {
    return array.map(row => {
        return createEmployeeRecord(row)
    });
}

const createTimeInEvent = (employeeRecord, dateTime) => {

}

const createTimeOutEvent = (employeeRecord, dateTime) => {

}
