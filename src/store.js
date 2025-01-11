import create from 'zustand';

    const useStore = create((set) => ({
      books: [],
      addBook: (book) => set((state) => ({ books: [...state.books, book] })),
      removeBook: (index) => set((state) => ({ books: state.books.filter((_, i) => i !== index) }))
    }));

    export { useStore };
