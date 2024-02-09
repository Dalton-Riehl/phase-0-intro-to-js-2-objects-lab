// Write your solution in this file!
const employee = {};
employee.name = {};
employee.streetAddress = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {};
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = employee;
    delete employee[key];
    return employee;
}