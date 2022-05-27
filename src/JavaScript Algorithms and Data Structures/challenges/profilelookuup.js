const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookup(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].lastName === prop) {
      return contacts[i][name]; // return contacts[i] lang e print niya ang specific nga object which is si 3 sa 0 1 2 3
    }
  }
}

var print = lookup("firstName", "Vos");

console.log(print);
