const htmlTop = `
<!DOCTYPE html>
<html lang="en-US">

<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
	<title>Team Generator</title>
    <style>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

header {
    background-color: rgba(255, 0, 0, 0.808);
    text-align: center;
    padding: 1em;
    color: white;
    
    border: 5px solid blue;
}

body {
    font-family: sans-serif;
    margin-top: 7%;
}

h1 {
    text-align: center;
    margin-bottom: .5em;
}

main {
    width: 86%;
    margin: 0 auto;
    border: 1px solid red;
}


.card {
    border: 1px solid black;
    padding: 1em;
    width: 100%;
    border-radius: 6px;
    box-shadow: 3px 4px 10px 5px rgba(128, 128, 160, 0.85);
    margin-bottom: 2em;
}

.card dt {
    text-align: center;
    background-color: dodgerblue;
    font-size: 1.5em;
    padding: .5em 0;
    margin-bottom: 1em;
}

.card dd {
    margin-bottom: .5em;

}

@media screen and (min-width:700px) {
    dl {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(calc(180px + 12vmin), 100%), 1fr));
        grid-gap: 1em;
        justify-content: space-between;
    }

    .card {
        max-width: unset;

    }

}

    </style>
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
    <div class="card">
      <dt class="${emp.getRole()}">${emp.getName()}</dt>
      <dd>${emp.getRole()}</dd>
      <dd>ID: ${emp.getId()}</dd>
      <dd><a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></dd>   
`;
    switch (emp.getRole()) {
        case "Manager":
            html += `<dd>Office Number: ${emp.getOfficeNumber()}</dd>`;
            break;
        case "Engineer":
            html += `<dd><a href="https://github.com/${emp.getGithub()}">Github: ${emp.getGithub()}</a></dd>`;
            break;
        case "Intern":
            html += `<dd>School: ${emp.getSchool()}</dd>`;
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