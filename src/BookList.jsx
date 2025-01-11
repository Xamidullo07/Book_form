import React from 'react';
    import { useStore } from './store';

    function BookList() {
      const books = useStore((state) => state.books);
      const removeBook = useStore((state) => state.removeBook);

      return (
        <div>
          <h2>Library</h2>
          {books.length === 0 ? (
            <p>No books in the library.</p>
          ) : (
            <ul>
              {books.map((book, index) => (
                <li key={index}>
                  <h3>{book.title}</h3>
                  <p>by {book.author}</p>
                  <p>Genre: {book.genre}</p>
                  <p>Year: {book.year}</p>
                  <button onClick={() => removeBook(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    export default BookList;
