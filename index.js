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

const createTimeInEvent = (employee, dateTime) => {
    let [date, hour] = dateTime.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

const createTimeOutEvent = (employee, dateTime) => {
    let [date, hour] = dateTime.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

const hoursWorkedOnDate = (employeeRecord, dateTime) => {

}