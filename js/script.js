const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// question 2 

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading"
console.dir("h3")
//question 3

heading.style.fontSize = "2em"

// question 4

heading.classList.add("subHeading")
console.log(heading.className)

// question 5

