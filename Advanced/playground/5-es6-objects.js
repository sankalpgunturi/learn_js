// Object Property Shorthand
const name = "Andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Philadelphia",
};

// console.log(user);

// Object Destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
};

// const { label: productLabel, stock, ratings = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(ratings);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
