import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
  const {books} = useContext(BookContext)
  return (
    <header className="header">
      <h1 className="header__title">Reading time</h1>
      <p className="header__text">Books to read: {books.length}</p>
    </header>
  )
}

export default Navbar