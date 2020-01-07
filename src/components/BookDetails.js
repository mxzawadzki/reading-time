import React, {useContext} from 'react'
import {BookContext} from '../contexts/BookContext'

const BookDetails = ({book}) => {
  // default book cover
  const coverPlaceholder = require('../assets/img/placeholder.png')
  const {dispatch} = useContext(BookContext)
  return (
    <li className="booklist__item">
      <div className="booklist__cover">
        <img className="booklist__img" src={book.cover ? book.cover : coverPlaceholder} alt={book.cover ? book.title : 'Placeholder cover'}/>
      </div>
      <div className="booklist__details">
        <h2 className="booklist__title">{book.title}</h2>
        <p className="booklist__author">by <span className="booklist__author--name">{book.author}</span></p>
        <button className="booklist__button" onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>Delete from shelf</button>
      </div>
    </li>
  )
}

export default BookDetails