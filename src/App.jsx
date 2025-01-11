import React from 'react';
    import { useStore } from './store';
    import BookForm from './BookForm';
    import BookList from './BookList';

    function App() {
      return (
        <div className="app">
          <h1>Digital Library</h1>
          <BookForm />
          <BookList />
        </div>
      );
    }

    export default App;
