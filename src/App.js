import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Header from './components/Header';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Header/>
        <BookList/>
      </BookContextProvider>
    </div>
  );
}

export default App;
