let header = "HTML Template";
let tags = ["JavaScript", "ES6", "ReactJS"];

let htmlContent = `<h2>${header}</h2><ul>`;

for (let tag of tags) {
  htmlContent += `<li>${tag}</li>`;
}
htmlContent += `</ul>`;
console.log(htmlContent);

document.getElementById("lessons").innerHTML = htmlContent;
