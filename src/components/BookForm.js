import React, {useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext'

const BookForm = () => {
  const {addBook} = useContext(BookContext)
  const [cover, setCover] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('cover:' + cover)
    console.log('title:' + title)
    console.log('author:' + author)
    addBook(cover, title, author)
    console.log(addBook)
    setCover('')
    setTitle('')
    setAuthor('')
  }
  return (
    <form className="bookform" onSubmit={handleSubmit}>
      <input className="bookform__input" type="text" placeholder="Link to book cover" value={cover} onChange={(e) => {setCover(e.target.value)}}/>
      <input className="bookform__input" type="text" placeholder="Book title" required value={title} onChange={(e) => {setTitle(e.target.value)}}/>
      <input className="bookform__input" type="text" placeholder="Book author" required value={author} onChange={(e) => {setAuthor(e.target.value)}}/>
      <input className="bookform__submit" type="submit" value="Add book"/>
    </form>
  )
}

export default BookForm