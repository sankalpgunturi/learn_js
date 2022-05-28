const courses = [{
        name: "Complete ReactJS course",
        price: "2.3"
    },
    {
        name: "Complete Angular course",
        price: "2.1"
    },
    {
        name: "Complete ML course",
        price: "2.99"
    },
    {
        name: "Complete C++ course",
        price:"2.86"
    },
    {
        name: "Django Course",
        price: "2.65"
    },
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    }); 
};
//     <li class="list-group-item">
//     Javascript course<span class="float-right">$2.1</span>
//     </li>

// generateList();

window.addEventListener("load", generateList);

// const button = document.querySelector(".btn.btn-success.btn-lg.mt-4.mx-auto.d-block.sort-btn");
// button.addEventListener("click", () => {
//     courses.sort( (a, b) => a.price - b.price);
//     generateList();
// });

const button2 = document.querySelector(".btn.btn-primary.btn-lg.mt-4.mx-auto.d-block.sort-btn");
button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price);  
    generateList();
});
