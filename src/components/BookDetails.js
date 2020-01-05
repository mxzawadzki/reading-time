import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'

const BookDetails = ({book}) => {
  // default book cover
  const coverPlaceholder = require('../assets/img/placeholder.jpg')
  const {dispatch} = useContext(BookContext)
  return (
    <li className="booklist__item">
      <div className="booklist__cover">
        <img className="booklist__img" src={book.cover ? book.cover : coverPlaceholder} alt={book.cover ? book.title : 'Placeholder cover'}/>
      </div>
      <div className="booklist__title">{book.title}</div>
      <div className="booklist__author">{book.author}</div>
      <button onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>Done reading</button>
    </li>
  )
}

export default BookDetails