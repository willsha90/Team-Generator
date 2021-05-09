const htmlTop=`
<!DOCTYPE html>
<html lang="en-US">

<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
	<title>Team Generator</title>
    <style></style>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
	<main>
`;
const htmlBottom=`
    </main>
</body>
</html>    
`;

function getEmployeeCard(emp){
let html = `
<div> <h2>${emp.getName()}</h2>
      <h3>${emp.getRole()}</h3>
      <p>id: ${emp.getId()}</p>
       <a href="mailto:${emp.getEmail()}"> ${emp.getEmail()}</a>   
`;
switch(emp.getRole()){
    case "Manager": html+=`<p>office number: ${emp.getOfficeNumber()}</p>`;break;
    case "Engineer": html+=`<p><a href="https://github.com/${emp.getGithub()}">github: ${emp.getGithub()}</a></p>`;break;
    case "Intern": html+=`<p>school: ${emp.getSchool()}</p>`;break;
}
html+="</div>";
return html;
}

function getTeamHtml(employees){
    let html= htmlTop;
for(let emp of employees){
    html+=getEmployeeCard(emp);
}
    html+=htmlBottom;
    return html;
}
module.exports=getTeamHtml;