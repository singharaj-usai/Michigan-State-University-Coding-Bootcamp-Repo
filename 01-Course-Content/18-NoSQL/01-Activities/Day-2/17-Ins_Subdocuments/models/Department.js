const mongoose = require('mongoose');

// Child documents or subdocuments can be embedded into a parent document
// the managerSchema defines the shape for manager subdocument
const managerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: Number,
});

// The employeeScheme defines the shape for the employee subdocument
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: Number,
});

// departmentSchema provides the shape of the parent document
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // This will add a single subdocument to include the manager's information
  manager: managerSchema,
  // This will include an array that holds all the employees' information
  employees: [employeeSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// Uses mongoose.model() to create model
const Department = mongoose.model('Department', departmentSchema);

// Uses model to create new instance including subdocument
const managerData = { name: 'Taylor', salary: 80000 };
const employeeData = [
  { name: 'Ann', salary: 40000 },
  { name: 'Liu', salary: 50000 },
];

Department.create(
  { name: 'Shoes', manager: managerData, employees: employeeData },
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);

module.exports = Department;
