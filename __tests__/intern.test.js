const Intern = require("../lib/intern");
const emp = new Intern("John",1,"john@gmail.com","Fordham");
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
test("Employee school should be a retrievable",function(){
    expect(emp.getSchool()).toBe("Fordham");
});
test("Employee role should be a retrievable",function(){
    expect(emp.getRole()).toBe("Intern");
});