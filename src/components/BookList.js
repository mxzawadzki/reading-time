import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
  const {books} = useContext(BookContext)
  return books.length ?  (
    <div className="booklist">
      <ul className="booklist__list">
        {books.map(book => {
          return (
            <BookDetails book={book} key={book.id} />
          )
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      <p className="empty__text">Nothing on the list</p>
    </div>
  )
}

export default BookList