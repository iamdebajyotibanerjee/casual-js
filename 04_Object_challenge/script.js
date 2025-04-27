// Create the library object
const library = [
  {
    title: "Golpo Guccha",
    author: "Rabindranath Tagore",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Ghanada Samagra",
    author: "Premendra Mitra",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Shanku Samagra",
    author: "Satyajit Ray",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

console.log(`First challenge check : library = `);
console.log(library);

// Set the value of 'read' property to true for all the books. Do not use funstions, loops or higher order methods

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(`Second challenge check : library = `);
console.log(library);

// Destructure the 'title' property from the the first book in the library and rename it to firstBook

const { title: firstBook } = library[0];
console.log(`Third challenge check : firstBook = `);
console.log(firstBook);

// Turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);
console.log(`Fourth challenge check : libraryJSON = `);
console.log(libraryJSON);
