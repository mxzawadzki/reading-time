import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'

const BookDetails = ({book}) => {
  const {removeBook} = useContext(BookContext)
  return (
    <li className="booklist__item">
      <div className="booklist__cover">
        <img className="booklist__img" src={book.cover} alt={book.title}/>
      </div>
      <div className="booklist__title">{book.title}</div>
      <div className="booklist__author">{book.author}</div>
      <button onClick={() => removeBook(book.id)}>Done reading</button>
    </li>
  )
}

export default BookDetails