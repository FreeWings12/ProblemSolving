/*
Challenge:

Your task is to build a JavaScript function to organize a library's book inventory. The library stores information about each book in an array of objects. Each object contains the following properties:

    title: String (the title of the book)
    author: String (the author's name)
    publicationYear: Number (the year the book was published)
    genre: String (the genre of the book)
    available: Boolean (whether the book is currently available for borrowing)

Objective:
    Write a JavaScript function sortBooks(books, criteria) that takes two arguments:

    books: An array of book objects as described below.
    criteria: A string representing the property by which the books should be sorted. Valid options are "title", "author", "publicationYear", "genre", and "available".
    The function should return a new array of book objects sorted in ascending order based on the specified criteria. If two books have the same value for the sorting criteria, they should be sorted alphabetically by title.

Bonus:
    Allow the function to accept an optional third argument order that can be "asc" (default) or "desc" to specify the sorting order (ascending or descending).
    Handle invalid sorting criteria gracefully.
Test Cases:
    Example input:
    JavaScript
    const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", publicationYear: 1954, genre: "Fantasy", available: true },
    { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", available: false },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", publicationYear: 1979, genre: "Science Fiction", available: true },
    ];

Expected output:
    sortBooks(books, "publicationYear"); // [ { title: "Pride and Prejudice", ... }, { title: "The Hitchhiker's Guide to the Galaxy", ... }, { title: "The Lord of the Rings", ... } ]

Bonus test cases:
    sortBooks(books, "genre", "desc"); // Sort by genre in descending order
    sortBooks(books, "invalidCriteria"); // Handle invalid criteria gracefully

This problem combines sorting algorithms with object manipulation, providing a good challenge for practicing JavaScript skills.

*/


const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", publicationYear: 1954, genre: "Fantasy", available: true },
    { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", available: false },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", publicationYear: 1979, genre: "Science Fiction", available: true },
  ];


const sortBooks = (books, criteria) => {
    const validCriteria = ["title", "author", "publicationYear", "genre", "available"];
    if (validCriteria.includes(criteria) && books?.length) {
      return books.sort((a, b) => {
        const isPublicationYearCriteria = criteria === "publicationYear";
        const isAvailableCriteria = criteria === "available";
        const criteriaA = (isPublicationYearCriteria || isAvailableCriteria)
          ? a[criteria] : a[criteria].toUpperCase();
        const criteriaB = (isPublicationYearCriteria || isAvailableCriteria)
          ? b[criteria] : b[criteria].toUpperCase();
        if (isAvailableCriteria) {
          if (criteriaA && !criteriaB) return -1;
          if (!criteriaA && criteriaB) return 1;
          if (a.title.toUpperCase() < b.title.toUpperCase()) return -1;
          if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
          return 0;
        } else if (criteriaA < criteriaB) return -1;
        else if (criteriaA > criteriaB) return 1;
        return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1; // Default fallback for title comparison
      });
    } else {
      return "Oops!! You have passed invalid criteria or no books";
    }
  };
  

console.log("Author:", sortBooks(books, 'author'));
console.log("publicationYear:", sortBooks(books, 'publicationYear'));
console.log("Title:", sortBooks(books, 'title'));
console.log("Genre:", sortBooks(books, 'genre'));
console.log("Available:", sortBooks(books, 'available'));
console.log("Invalid:", sortBooks(books, 'invalid'));
console.log("No books:", sortBooks([], 'author'));