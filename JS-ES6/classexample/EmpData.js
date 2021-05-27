class EmpData {
  emp_Name = "kavitha";
  getEmpData() {
    console.log("Employee Name:", this.emp_Name);
  }
}

let emp = new EmpData();

console.log(emp);
console.log(emp.emp_Name);
console.log(emp.getEmpData());
