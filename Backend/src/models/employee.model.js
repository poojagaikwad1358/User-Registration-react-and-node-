'use strict';
var dbConn = require('../../config/db.config');
//Employee object create
var Employee = function(employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.gender = employee.gender;
    this.date_of_birth = employee.date_of_birth;
}
Employee.create = function(newEmp, result) {
    dbConn.query("INSERT INTO employees set ?", newEmp, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Employee.findById = function(id, result) {
    dbConn.query("Select * from employees where id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Employee.findAll = function(result) {
    dbConn.query("Select * from employees", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

module.exports = Employee;