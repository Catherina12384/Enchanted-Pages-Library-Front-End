window.onscroll=()=>{
  if(window.scrollY>90){
      document.querySelector('.header .header-2').classList.add('active');
  }
  else{
      document.querySelector('.header .header-2').classList.remove('active');
  }
}



const books = [
  { image: 'b1.png', title: "Hide And Seek", author: "Olivia Wilson", subject: "Mystery", publishDate: "2003-08-18" },

  { image: 'b2.png', title: "Portals Infinity", author: "Teddy Yu", subject: "Fiction", publishDate: "2022-02-01" },

  { image: 'b3.png', title: "Five Feet Apart", author: "Rachel Lippincott", subject: "Romance", publishDate: "2023-03-09" },

  { image: 'b4.png', title: "All This Time", author: "Rachel Lippincott", subject: "Romance", publishDate: "1992-12-05" },

  { image: 'b5.png', title: "Whe You Wish Upon A Lantern", author: "Gloria Chao", subject: "Fantasy", publishDate: "2016-07-19" },

  { image: 'b6.png', title: "Soul", author: "Olivia Wilson", subject: "Motivation", publishDate: "2023-03-29" },

  { image: 'b7.png', title: "The Lost Queen", author: "Ava Rice", subject: "History", publishDate: "2010-01-01" },

  { image: 'b8.png', title: "The Young Queens", author: "Kendare Blake", subject: "Historical Fiction", publishDate: "2020-06-24" },

  { image: 'b9.png', title: "The Bleak Night", author: "Alexa Carter", subject: "Thriller", publishDate: "1999-04-30" },

  { image: 'b10.png', title: "The Little Mermaid", author: "Hans Christian Andersen", subject: "Fairy Tale", publishDate: "1957-11-13" },

  { image: 'b11.png', title: "Green Thumb Poppy", author: "Estelle Darcy", subject: "Folklore", publishDate: "2008-12-28" },

  { image: 'b12.png', title: "The Labyrinth Of Whispers", author: "Timothy langley", subject: "Horror", publishDate: "1972-03-03" },

  { image: 'b13.png', title: "The Chemistrty Of Life", author: "Kaimari", subject: "Motivation", publishDate: "2017-05-10" },

  { image: 'b14.png', title: "The Killer Poison", author: "Julie Martinez", subject: "Crime Thriller", publishDate: "2000-07-23" },

  { image: 'b15.png', title: "Zombie Slayer", author: "Author", subject: "Horror Fiction", publishDate: "1977-02-03" },
];

const itemsPerPage = 10;
let currentPage = 1;

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  
  const filteredBooks = filterBooks();
  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage;
  const paginatedBooks = filteredBooks.slice(start, end);

  paginatedBooks.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
      <img src="${book.image}" alt="${book.title}" style="width:13rem;height:20rem;padding: .5rem">
      <p><strong>Title:</strong> ${book.title}</p>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Subject:</strong> ${book.subject}</p>
      <p><strong>Publish Date:</strong> ${book.publishDate}</p>
    `;
    bookList.appendChild(bookElement);
  });

  displayPagination(filteredBooks.length);
}

function displayPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.addEventListener("click", () => {
      currentPage = i;
      displayBooks();
    });
    pagination.appendChild(button);
  }
}

function filterBooks() {
  const titleFilter = document.getElementById("titleFilter").value.toLowerCase();
  const authorFilter = document.getElementById("authorFilter").value.toLowerCase();
  const subjectFilter = document.getElementById("subjectFilter").value.toLowerCase();
  const publishDateFilter = document.getElementById("publishDateFilter").value;

  return books.filter(book => 
    book.title.toLowerCase().includes(titleFilter) &&
    book.author.toLowerCase().includes(authorFilter) &&
    book.subject.toLowerCase().includes(subjectFilter) &&
    (publishDateFilter === "" || book.publishDate === publishDateFilter)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  displayBooks();

  document.getElementById("titleFilter").addEventListener("input", displayBooks);
  document.getElementById("authorFilter").addEventListener("input", displayBooks);
  document.getElementById("subjectFilter").addEventListener("input", displayBooks);
  document.getElementById("publishDateFilter").addEventListener("input", displayBooks);
});