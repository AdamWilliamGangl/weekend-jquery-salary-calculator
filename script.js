console.log('Batman!')

let employeeDatabase = [];
let totalCosts = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log("DOM is loaded!");
}

//1a. an input form that collects first name, last name, ID number, job title,
// annual salary.
function addNewEmployee() {
    //Created new varaibles to take in the value of the input fields
    const firstName = $('#firstname').val();
    const lastName = $('#lastname').val();
    const id = $('#id').val();
    const title = $('#title').val();
    const annualSalary = $('#annualSalary').val();

    //form validation part 1, ensure every field is filled.
    if (firstName && lastName && id && title && annualSalary) {
        let addNewEmployeeObject = {
            employeeFirstName = firstName,
            employeeLastName = lastName,
            employeeID = id,
            employeeTitle = title,
            employeeAnnualSalary = annualSalary
        };
        employeeDatabase.push(addNewEmployeeObject);
        render()
    }
    //form validation part 2, if a field is left blank- give an alert.
    else {
        alert('You have left a field blank!')
    }
}
//function to render items to the DOM
function render(){

}

function resetInputFields(){
    const firstName = $('#firstname').val("");
    const lastName = $('#lastname').val("");
    const id = $('#id').val("");
    const title = $('#title').val("");
    const annualSalary = $('#annualSalary').val("");
}


//1b. A submit button to collect and store the form information.

//1c. Append the stored information to the DOM.

//1d. Clear the input fields.


//2a. Calculate monthly costs using stored data.

//2b. Append that information to the DOM.

//2c. If monthly costs exceed $20,000, add a red background color to total monthly cost.


//3a. Create a delete button that removes an employee from the DOM.

//3b. Remove the employees salart from the reported total.

