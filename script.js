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
    $('.employeeTable').on('click', '.deleteBtn', deleteEmployee)
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

//function to delete employees.
function deleteEmployee() {
  
    //new array to update the state and render to the DOM.
    let newEmployees = [];
    //this new constant will help to target the entire employee to delete
    const employeeToDelete = $(this).parent().siblings().first().text();

    for (let employee of employeeDatabase) {
      if (employee.employeeFirstName !== employeeToDelete){
        newEmployees.push(employee);
      }
    }
    employeeDatabase = newEmployees;
    render();
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

    let employeeCostSum = 0;
    let employeeDatabaseCopy = employeeDatabase.slice(1)
    employeeCost = [];
    for (let cost of employeeDatabaseCopy) {
        employeeCostSum += 1 * cost.employeeAnnualSalary;
    }
    employeeCost = Math.round(employeeCostSum / 12);
    if (employeeCost > 20000) {
        $('.monthlyCostContainer').addClass('red')
    }
    employeeCost = employeeCost.toLocaleString("en-us")
    console.log('employee Cost', employeeCost);
}

//3a. Create a delete button that removes an employee from the DOM.

//3b. Remove the employees salary from the reported total.
