//require fs etc

function makeHtml(){
    const [
        managerTemplate,
        internTemplate,
        engineerTemplate,
        mainTemplate
      ] = await Promise.all([
        readFile(path.resolve(templatesDir, "manager.html"), "utf8"),
        readFile(path.resolve(templatesDir, "Intern.html"), "utf8"),
        readFile(path.resolve(templatesDir, "engineer.html"), "utf8"),
        readFile(path.resolve(templatesDir, "main.html"), "utf8")
      ]);
} 


//html.push for each 

module.exports = makeHtml
