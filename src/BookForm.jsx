import React, { useState } from 'react';
    import { useStore } from './store';

    function BookForm() {
      const [title, setTitle] = useState('');
      const [author, setAuthor] = useState('');
      const [genre, setGenre] = useState('');
      const [year, setYear] = useState('');
      const addBook = useStore((state) => state.addBook);

      const handleSubmit = (e) => {
        e.preventDefault();
        addBook({ title, author, genre, year });
        setTitle('');
        setAuthor('');
        setGenre('');
        setYear('');
      };

      return (
        <form onSubmit={handleSubmit}>
          <h2>Add a New Book</h2>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
          <input type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value, 10))} placeholder="Year" />
          <button type="submit">Add Book</button>
        </form>
      );
    }

    export default BookForm;
