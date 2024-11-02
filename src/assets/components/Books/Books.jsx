import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books,setBooks] = useState([]);
  useEffect(()=>{
    fetch('./booksData.json')
    .then(res=>res.json())
    .then(data=>setBooks(data))
  },[])
  return (
    <div>
      <h2 className="text-4xl font-bold my-8 text-center">Books</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-5">
        {
          books.map(book=><Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;