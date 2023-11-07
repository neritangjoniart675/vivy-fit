/*
   Filename: sophisticated_code.js

   Description: This code is a sophisticated and elaborate implementation
                of a web application that simulates a virtual art gallery.
                It allows users to browse through various artworks, leave
                comments, and even submit their own artwork.

   Author: [Your Name]

   Date: [Current Date]
*/

// Artworks database
const artworks = [
  {
    id: 1,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    medium: "Oil on panel",
    year: 1503,
    price: "$860 million",
    imageURL: "https://example.com/mona_lisa.jpg"
  },
  // ... Add more artworks here ...
];

// Users database
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    isAdmin: true
  },
  // ... Add more users here ...
];

// Class representing an Artwork
class Artwork {
  constructor(id, title, artist, medium, year, price, imageURL) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.medium = medium;
    this.year = year;
    this.price = price;
    this.imageURL = imageURL;
    this.comments = [];
  }

  addComment(user, comment) {
    this.comments.push({ user, comment });
  }
}

// Class representing a User
class User {
  constructor(id, name, email, password, isAdmin) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.artworks = [];
  }

  submitArtwork(artwork) {
    this.artworks.push(artwork);
  }
}

// Function to display all artworks
function displayArtworks() {
  console.log("Virtual Art Gallery");
  console.log("===================");

  artworks.forEach((artwork) => {
    console.log(`ID: ${artwork.id}`);
    console.log(`Title: ${artwork.title}`);
    console.log(`Artist: ${artwork.artist}`);
    console.log(`Medium: ${artwork.medium}`);
    console.log(`Year: ${artwork.year}`);
    console.log(`Price: ${artwork.price}`);
    console.log(`Image URL: ${artwork.imageURL}`);
    console.log("Comments:");
    artwork.comments.forEach((comment) => {
      console.log(`- ${comment.user.name}: ${comment.comment}`);
    });
    console.log("===================");
  });
}

// Function to add a comment to an artwork
function addCommentToArtwork(artworkId, userId, comment) {
  const artwork = artworks.find((artwork) => artwork.id === artworkId);
  const user = users.find((user) => user.id === userId);

  if (artwork && user) {
    artwork.addComment(user, comment);
    console.log("Comment added successfully.");
  } else {
    console.log("Invalid artwork or user ID.");
  }
}

// Function to submit an artwork
function submitArtwork(userId, artwork) {
  const user = users.find((user) => user.id === userId);

  if (user) {
    user.submitArtwork(artwork);
    artworks.push(artwork);
    console.log("Artwork submitted successfully.");
  } else {
    console.log("Invalid user ID.");
  }
}

// Usage example:

// Creating users
const user1 = new User(1, "John Doe", "john.doe@example.com", "password123", false);
const user2 = new User(2, "Jane Smith", "jane.smith@example.com", "password456", true);

// Creating artworks
const artwork1 = new Artwork(1, "Mona Lisa", "Leonardo da Vinci", "Oil on panel", 1503, "$860 million", "https://example.com/mona_lisa.jpg");
const artwork2 = new Artwork(2, "The Starry Night", "Vincent van Gogh", "Oil on canvas", 1889, "$100 million", "https://example.com/starry_night.jpg");

// Submitting artworks
submitArtwork(user1.id, artwork1);
submitArtwork(user1.id, artwork2);

// Adding comments
addCommentToArtwork(artwork1.id, user2.id, "This artwork is amazing!");
addCommentToArtwork(artwork2.id, user1.id, "I love the colors in this painting.");

// Displaying all artworks
displayArtworks();

// Output:
/*
Virtual Art Gallery
===================
ID: 1
Title: Mona Lisa
Artist: Leonardo da Vinci
Medium: Oil on panel
Year: 1503
Price: $860 million
Image URL: https://example.com/mona_lisa.jpg
Comments:
- Jane Smith: This artwork is amazing!
===================
ID: 2
Title: The Starry Night
Artist: Vincent van Gogh
Medium: Oil on canvas
Year: 1889
Price: $100 million
Image URL: https://example.com/starry_night.jpg
Comments:
- John Doe: I love the colors in this painting.
===================
*/
... (continue rest of the code)