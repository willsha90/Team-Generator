const Engineer = require("../lib/engineer");
const emp = new Engineer("John",1,"john@gmail.com","john@github.com");
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
test("Employee github should be a retrievable",function(){
    expect(emp.getGithub()).toBe("john@github.com");
});
test("Employee role should be a retrievable",function(){
    expect(emp.getRole()).toBe("Engineer");
});