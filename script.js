console.log('Batman!')

let employeeDatabase = [{
    employeeFirstName: 'First Name',
    employeeLastName: 'Last Name',
    employeeID: 'ID',
    employeeTitle: 'Title',
    employeeAnnualSalary: 'Annual Salary',
    employeeButton: ''
},];
let employeeCost = [];


$(document).ready(readyNow);

function readyNow() {
    console.log("DOM is loaded!");
    $('#submitBtn').on('click', addNewEmployee)
}


//1a. an input form that collects first name, last name, ID number, job title,
// annual salary.
function addNewEmployee() {
    console.log('Here are the employees in the database', employeeDatabase)
    //Created new varaibles to take in the value of the input fields
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const id = $('#id').val();
    const title = $('#title').val();
    const annualSalary = $('#annualSalary').val();
    const button = `<button class=deleteBtn> Delete </button>`

    //form validation part 1, ensure every field is filled.
    if (firstName && lastName && id && title && annualSalary) {
        let addNewEmployeeObject = {
            employeeFirstName: firstName,
            employeeLastName: lastName,
            employeeID: id,
            employeeTitle: title,
            employeeAnnualSalary: annualSalary,
            employeeButton: button
        };
        employeeDatabase.push(addNewEmployeeObject);

        resetInputFields();
        calculateMonthlyCost();
        render();
    }
    //form validation part 2, if a field is left blank- give an alert.
    else {
        alert('You have left a field blank!')
    }
}
//function to render items to the DOM
function render() {
    $('.employeeTable').empty();
    for (let employee of employeeDatabase) {
        $('.employeeTable').append(`
        <tr>
        <td>${employee.employeeFirstName}</td>
        <td>${employee.employeeLastName}</td>
        <td>${employee.employeeID}</td>
        <td>${employee.employeeTitle}</td>
        <td>${employee.employeeAnnualSalary}</td>
        <td>${employee.employeeButton}</td>
        <tr>
        `);
    };
    $('.monthlyCostContainer').html(`
        <p>$${employeeCost}</p>
        `); //need to append the sum of all employee salaries here.


}

function resetInputFields() {
    const firstName = $('#firstName').val("");
    const lastName = $('#lastName').val("");
    const id = $('#id').val("");
    const title = $('#title').val("");
    const annualSalary = $('#annualSalary').val("");
}

function calculateMonthlyCost() {

    let employeeCostSum = 0;
    let employeeDatabaseCopy = employeeDatabase.slice(1)
    employeeCost = [];
    for (let cost of employeeDatabaseCopy) {
        employeeCostSum += 1 * cost.employeeAnnualSalary; //This needs to not concatenate.
    }
    employeeCost = Math.round(employeeCostSum / 12);
    employeeCost = employeeCost.toLocaleString("en-us")
    console.log('employee Cost', employeeCost);
}


//2c. If monthly costs exceed $20,000, add a red background color to total monthly cost.


//3a. Create a delete button that removes an employee from the DOM.

//3b. Remove the employees salary from the reported total.
