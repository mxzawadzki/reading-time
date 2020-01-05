import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Header from './components/Header';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Header/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
