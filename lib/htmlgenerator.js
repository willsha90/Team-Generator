const htmlTop = `
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
    <dl>
    
`;
const htmlBottom = `
    </dl>
    </main>
</body>
</html>    
`;

function getEmployeeCard(emp) {
    let html = `
<div class="card"> <dt class="${emp.getRole()}">${emp.getName()}</dt>
      <dd>${emp.getRole()}</dd>
      <dd>id: ${emp.getId()}</dd>
       <dd> <a href="mailto:${emp.getEmail()}"> ${emp.getEmail()}</a></dd>   
`;
    switch (emp.getRole()) {
        case "Manager":
            html += `<dd>office number: ${emp.getOfficeNumber()}</dd>`;
            break;
        case "Engineer":
            html += `<dd><a href="https://github.com/${emp.getGithub()}">github: ${emp.getGithub()}</a></dd>`;
            break;
        case "Intern":
            html += `<dd>school: ${emp.getSchool()}</dd>`;
            break;
    }
    html += "</div>";
    return html;
}

function getTeamHtml(employees) {
    let html = htmlTop;
    for (let emp of employees) {
        html += getEmployeeCard(emp);
    }
    html += htmlBottom;
    return html;
}
module.exports = getTeamHtml;