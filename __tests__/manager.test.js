const Manager = require("../lib/manager");
const emp = new Manager("John",1,"john@gmail.com",40);
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
test("Employee office number should be a retrievable",function(){
    expect(emp.getOfficeNumber()).toBe(40);
});
test("Employee role should be a retrievable",function(){
    expect(emp.getRole()).toBe("Manager");
});