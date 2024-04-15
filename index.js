/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => ({
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
})

const createEmployeeRecords = arrayOfArrays => arrayOfArrays.map(array => createEmployeeRecord(array))

const createTimeInEvent = function (timeInString) {
    const date = timeInString.substr(0, 10)
    const time = timeInString.substr(11)
    const parsedTime = parseInt(time)
    const timeInEvent = {
        type: "TimeIn",
        hour: parsedTime,
        date: date
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

const createTimeOutEvent = function (timeOutString) {
    const date = timeOutString.substr(0, 10)
    const time = timeOutString.substr(11)
    const parsedTime = parseInt(time)
    const timeOutEvent = {
        type: "TimeOut",
        hour: parsedTime,
        date: date
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

const hoursWorkedOnDate = function (dateString) {
    const foundTimeInEvent = this.timeInEvents.find(timeInObj => {
        return timeInObj.date === dateString
    })
    const foundTimeOutEvent = this.timeOutEvents.find(timeOutObj => {
        return timeOutObj.date === dateString
    })

    const hoursWorked = (foundTimeOutEvent.hour - foundTimeInEvent.hour) / 100
    return hoursWorked
}

const wagesEarnedOnDate = function (dateString) {
    const hoursWorked = hoursWorkedOnDate.call(this, dateString)
    const employeeWage = this.payPerHour
    return hoursWorked * employeeWage
}

const findEmployeeByFirstName = function(srcArray, firstName) {
    const foundEmployee = srcArray.find(employee => employee.firstName === firstName)
    return foundEmployee ? foundEmployee : undefined
}

const calculatePayroll = function (arrOfEmployees) {
    const payroll = arrOfEmployees.reduce((accumulator, employee) => {
     return accumulator += allWagesFor.call(employee) 
    }, 0)
    return payroll
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

