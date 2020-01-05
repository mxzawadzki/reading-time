import React, {createContext, useReducer, useEffect} from 'react'
import uuid from 'uuid/v1'
import {bookReducer} from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  // dummy data to start with something
  const [books, dispatch] = useReducer(bookReducer, [
    {
      cover: 'https://vignette.wikia.nocookie.net/witcher/images/7/78/Uk_the_last_wish_new.jpg/revision/latest/scale-to-width-down/326?cb=20160617190552', 
      title: 'The Last Wish', 
      author: 'Andrzej Sapkowski', 
      id: uuid()},
    {
      cover: 'https://vignette.wikia.nocookie.net/witcher/images/4/46/Uk_sword_of_destiny_new.jpg/revision/latest?cb=20151218163406', 
      title: 'Sword of Destiny', 
      author: 'Andrzej Sapkowski', 
      id: uuid()}
  ], () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  })
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider