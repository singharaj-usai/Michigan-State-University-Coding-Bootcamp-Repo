// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

// handle displaying the time
function displayTime() {
  //todo: update the text in the `timeDisplayEl` with the following format: Jun 21, 2022 at 04:27:03 pm [ hint you can use moment().format() ]
  var rightNow = 'Jun 21, 2022 at 04:27:03 pm';
  //todo: update the timeDisplayEl element with the above time!
}

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  var projectRowEl = $('<tr>');

  var projectNameTdEl = $('<td>').addClass('p-2').text(name);

  //todo: add more virtual elements to complete the table
  var projectTypeTdEl = $('<td>').addClass('p-2').text(type);
  var rateTdEl;
  var dueDateTdEl;

  //todo: get the difference between now and dueDate in this format 'MM/DD/YYYY' and assign it to the following var
  var daysToDate = 'MM/DD/YYYY';
  var daysLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);

  var totalEarnings = 'tbd!'; //todo: write a function that multiplies the daily rate by 8 ( hours per day ) and the number of days to get and return the total earnings. you need to pass rate and number of days to it.

  // You can also chain methods onto new lines to keep code clean
  var totalTdEl = $('<td>')
    .addClass('p-2')
    .text('$' + totalEarnings);

  var deleteProjectBtn = $('<td>')
    .addClass('p-2 delete-project-btn text-center')
    .text('X');

  //todo: add all the other elements you may have created above.
  projectRowEl.append(
    projectNameTdEl,
    daysLeftTdEl,
    totalTdEl,
    deleteProjectBtn
  );

  projectDisplayEl.append(projectRowEl);

  //todo: Explain what does the following does and if we need it at all!
  // projectModalEl.modal('hide');
}


function handleDeleteProject(event) {
  console.log(event.target);
  //todo: complete the delete project function
}

// handle project form submission
function handleProjectFormSubmit(event) {
  //todo:
  //1. stop the page from refreshing
  //2. reset the form
  //3. call the printProjectData with appropriate data
  event.preventDefault();

  //todo: what does this do?
  projectFormEl[0].reset();
}

//todo: add an eventlistener to projectFormEl to call the handleProjectFormSubmit on submit

//todo: add an event listener to projectDisplayEl to be called everytime the user clicks on .delete-project-btn to call handleDeleteProject



//todo: what does the following line do?
dueDateInputEl.datepicker({ minDate: 1 });

//todo: call the displayTime function once every second
