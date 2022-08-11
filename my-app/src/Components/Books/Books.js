import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AllBook';
import Header from '../Navigation/Header';
import { getBooks } from '../../redux/books/books';
import './Books.css';

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <Header />
      <div className="books-container">
        {books.map((book) => (
            <div key={book.title}>
            <div>{book.author}</div>
            <div>{book.title}</div>
            <div>{book.category}</div>
          <button type='button'>Remove</button>
          </div>
        ))}
      </div>
      <AddBook />
    </>
  );
}
