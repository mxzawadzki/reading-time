import React, {createContext, useState} from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'The Last Wish', author: 'Andrzej Sapkowski', cover: 'https://vignette.wikia.nocookie.net/witcher/images/7/78/Uk_the_last_wish_new.jpg/revision/latest/scale-to-width-down/326?cb=20160617190552', id: uuid()},
    {title: 'Sword of Destiny', author: 'Andrzej Sapkowski', cover: 'https://vignette.wikia.nocookie.net/witcher/images/4/46/Uk_sword_of_destiny_new.jpg/revision/latest?cb=20151218163406', id: uuid()}
  ])
  const addBook = (title, author, cover) => {
    setBooks([...books, {title, author, cover, id: uuid()}])
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }
  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider