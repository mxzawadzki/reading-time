import React, {createContext, useReducer, useEffect} from 'react'
import uuid from 'uuid/v1'
import {bookReducer} from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  // dummy data to start with something
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : [
      {
        cover: 'https://images-na.ssl-images-amazon.com/images/I/61T2sI9vEDL.jpg',
        title: 'Pro Vue.js 2', 
        author: 'Adam Freeman', 
        id: uuid()},
      {
        cover: 'https://www.oreilly.com/library/cover/9780136083238/360h/', 
        title: 'Clean Code', 
        author: 'Robert C. Martin', 
        id: uuid()}
    ]
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