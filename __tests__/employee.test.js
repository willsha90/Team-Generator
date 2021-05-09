const Employee = require("../lib/employee");
const emp = new Employee("John",1,"john@gmail.com");
test("Employees should be an object",function(){
    expect(typeof emp).toBe("object");
});
test("Employee name should be a retrievable",function(){
    expect(emp.getName()).toBe("John");
});
test("Employee id should be a retrievable",function(){
    expect(emp.getId()).toBe(1);
});
test("Employee email should be a retrievable",function(){
    expect(emp.getEmail()).toBe("john@gmail.com");
});
test("Employee role should be a retrievable",function(){
    expect(emp.getRole()).toBe("Employee");
});