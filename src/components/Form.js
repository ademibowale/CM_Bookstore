import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBookStore } from '../redux/books/books';

const bookData = {
  title: '',
  author: '',
  category: 'Action',
};
function Form() {
  const dispatch = useDispatch();
  const [book, setBook] = useState(bookData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title.trim() && book.author.trim()) {
      dispatch(addBookStore(book));
      setBook({
        item_id: '',
        title: '',
        author: '',
        category: 'Action',
      });
    }
  };

  const handleTitle = (e) => {
    setBook({
      ...book,
      title: e.target.value,
      item_id: uuidv4(),
    });
  };

  const handleAuthor = (e) => {
    setBook({
      ...book,
      author: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setBook({
      ...book,
      category: e.target.value,
    });
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} id="form">
        <input type="text" placeholder="Book title" className="bk-title" value={book.title} onChange={handleTitle} />
        <input type="text" placeholder="Author" className="bk-author" value={book.author} onChange={handleAuthor} />
        <select value={book.category} onChange={handleSelect}>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>

  );
}

export default Form;
