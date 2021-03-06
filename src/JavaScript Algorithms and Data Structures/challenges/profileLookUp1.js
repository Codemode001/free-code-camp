// Setup
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

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    //by doing this si i na karon is naay value nga 0 1 2 3 which is mura na syag nahimog id per objects nga naa sa contacts
    //if e console.log nako si contacts[i] mo gawas ang whole nga
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]; //namali ko ani more than 2 hours ko na nag code ani akong gibutang kay return contacts[i].prop which is mali kay wala man tay key nga prop sa atoang objects. dapat atong gitawag is si [prop] nga parameter sa atong function unya naay property nga likes sa ubos
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

var data = lookUpProfile("Akira", "likes");

console.log(data);

//si i is selector, if e print nimo si contacts iyang e print tanan sulod sa array look profilelookuup for more
