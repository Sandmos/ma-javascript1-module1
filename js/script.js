const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//question 1
const cat = {
  complain: "meow!",
};

console.log(cat.complain);

// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";
console.log("h3");
//question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subHeading");
console.log(heading.className);

// question 5
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// question 6
const resultsContainer = document.querySelector("div");
console.log(resultsContainer);
resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";

// question 7

function myList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list);
  }
};
myList(cats);

// question 8

const container = document.querySelector(".cat-container");
let html = "";

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);

    let theName = "";

    if (cats[i].name) {
      theName = cats[i].name;
    } else {
      theName = "Name unknown";
    }

    let theAge = "";

    if (cats[i].age) {
      theAge = cats[i].age;
    } else {
      theAge = "Age unknown";
    }

    html = html + `

<div>
    <h5>the Name: ${theName}</h5>
    <p>the Age: ${theAge}</p>
</div>
`;
    console.log(html);
  }
}
createCats(cats);
container.innerHTML = html;
