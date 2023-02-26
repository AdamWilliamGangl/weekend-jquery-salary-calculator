let employeeDatabase = [];

let employeeCost = [];

$(document).ready(readyNow);

function readyNow() {
    console.log("DOM is loaded!");
    $('#submitBtn').on('click', addNewEmployee)
    $('.employeeTable').on('click', '.deleteBtn', deleteEmployee)
}

// a function to collect employee info through input fields.
function addNewEmployee() {
    //Created new variabbles to take in the value of the input fields
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

//function to delete employees.
function deleteEmployee() {

    //new array to update the state and render to the DOM.
    let newEmployees = [];
    //this new constant will help to target the entire employee to delete
    const employeeToDelete = $(this).parent().siblings().first().text();

    for (let employee of employeeDatabase) {
        if (employee.employeeFirstName !== employeeToDelete) {
            newEmployees.push(employee);
        }
    }
    employeeDatabase = newEmployees;
    calculateMonthlyCost();
    render();
}

//function to render items to the DOM
function render() {
    $('.employeeTable').empty();
    for (let employee of employeeDatabase) {
        $('.employeeTable').append(`
        <tr class=etc>
        <td class=etc>${employee.employeeFirstName}</td>
        <td class=etc>${employee.employeeLastName}</td>
        <td class=etc>${employee.employeeID}</td>
        <td class=etc>${employee.employeeTitle}</td>
        <td class=etc>${employee.employeeAnnualSalary} </td>
        <td class=etc>${employee.employeeButton}</td>
        `);
    };
    $('.monthlyCostContainer').html(`
        <h4>Total Monthly:</h4>
        <p>$${employeeCost}</p>
        `);
}

//function to reset the input field values after the submit button is clicked.
function resetInputFields() {
    const firstName = $('#firstName').val("");
    const lastName = $('#lastName').val("");
    const id = $('#id').val("");
    const title = $('#title').val("");
    const annualSalary = $('#annualSalary').val("");
}

//function to calculate the monthly cost of all employee salaries.
function calculateMonthlyCost() {
console.log('this is the employee salary', employeeDatabase.employeeAnnualSalary)
    let employeeCostSum = 0;
    employeeCost = [];
    for (let cost of employeeDatabase) {
        employeeCostSum += 1 * cost.employeeAnnualSalary;
    }
    //rounding out our costs
    employeeCost = Math.round(employeeCostSum / 12);

    //changing display to red if monthly costs exceed 20,000
    if (employeeCost > 20000) {
        $('.monthlyCostContainer').addClass('red')
    }
    else{
        $('.monthlyCostContainer').removeClass('red')
    }

    //converting to dollar display
    employeeCost = employeeCost.toLocaleString("en-us")
}

