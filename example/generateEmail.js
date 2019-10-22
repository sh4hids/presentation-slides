const mjml2html = require("mjml");
const fs = require("fs");

const shopEmail = require("./templates/shopEmail");
const twoColEmail = require("./templates/twoColEmail");

const htmlOutput = mjml2html(shopEmail, { minify: false });

fs.writeFile("./example/emails/email.html", htmlOutput.html, err => {
  if (err) throw err;
  console.log("Email html generated successfully");
});
