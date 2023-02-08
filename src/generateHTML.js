// Import library
const fs = require('fs');
const path = require('path');

// Store html template
const html =
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Builder</title>
  <style>
  /* GENERAL */
  :root {
    --red: #E84856;
    --blue: #0277F7;
    --gray: #F6F7F9;
  }
  
  body {
    font-family: sans-serif;
    margin: 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  /* HEADER */
  header {
    background-color: var(--red);
    color: white;
    border-bottom: 2px solid black;
    text-align: center;
    height: 100px;
    line-height: 100px;
  }
  
  h1 {
    margin: 0;
  }
  
  /* MAIN CONTENT */
  #member-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 50px 20px 20px 20px;
  }
  
  .member-tile {
    flex-basis: 400px;
    border: 1px solid lightgray;
    border-radius: 5px;
    box-shadow: 3px 3px 3px gray;
  }
  
  .member-tile h2, .member-tile h3 {
    margin: 0;
  }
  
  .tile-top {
    color: white;
    background-color: var(--blue);
    padding: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .tile-bottom {
    background-color: var(--gray);
    padding: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  table, td {
    background-color: white;
    padding: 3px;
    border: 1px solid lightgray;
    border-collapse: collapse;
    width: 100%;
  }
  </style>
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main id="member-container">
    *PLACEHOLDER*
  </main>
</body>
</html>
`;

// Adds members to the html and write the html file
function generateAndWriteFiles(data) {
  // Generate final html content
  let generatedHTML = generateHTML(data);

  // Write html
  console.log('Attempting to write index.html');
  fs.writeFile('index.html', generatedHTML, (err) =>
  err ? console.log(err) : console.log('index.html created successfully')
  );
}

// Add members to html template
function generateHTML(data) {
  memberHTML = '';

  // Loop through members and add to html
  for (const member of data) {
    // Get general information
    let name = member.getName();
    let id = member.getId();
    let email = member.getEmail();
    let role = member.getRole();
    let extraInfo;

    // Get role specific information
    if (role == 'Manager') {
      extraInfo = 'Office number: ' + member.getOfficeNumber();
    } else if (role == 'Engineer') {
      let github = member.getGithub();
      extraInfo = `GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a>`
    } else if (role == 'Intern') {
      extraInfo = 'School: ' + member.getSchool();
    }

    // Substitute member values into html
    let htmlTile =
    `<div class="member-tile">
      <div class="tile-top">
        <h2>${name}</h2>
        <h3>${role}</h3>
      </div>
      <div class="tile-bottom">
        <table>
          <tr>
            <td>ID: ${id}</td>
          </tr>
          <tr>
            <td>Email: <a href="mailto:${email}" target="_blank">${email}</a></td>
          </tr>
          <tr>
            <td>${extraInfo}</td>
          </tr>        
        </table>
      </div>
    </div>
    `;

    memberHTML += htmlTile;
  }

  // Return the final html
  let finalHTML = html.replace('*PLACEHOLDER*', memberHTML);
  return finalHTML;
}

module.exports = generateAndWriteFiles;

