import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBookStore } from '../redux/books/books';

function Book({
  category, title, author, percentageCompleted, currentChapter, id,
}) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBookStore(id));
  };
  return (
    <div className="book">
      <div className="bk-about">
        <p className="book-title">{category}</p>
        <h2>{title}</h2>
        <p className="book-author">{author}</p>
        <div className="action-btn">
          <button type="button">Comments</button>
          <button type="button" onClick={() => handleRemove(id)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-info">
        <div className="book-progress">
          <div className="progress" />
          <div>
            <p>
              {percentageCompleted}
              %
            </p>
            <small>Completed</small>
          </div>
        </div>
        <div className="hr" />
        <div className="book-chapter">
          <p>CURRENT CHAPTER</p>
          <h4>
            Chapter
            {' '}
            {currentChapter}
          </h4>
          <button type="button" className="chapter-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.defaultProps = {
  category: '',
  title: '',
  author: '',
  percentageCompleted: 64,
  currentChapter: 0,
  id: '',
};

Book.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  percentageCompleted: PropTypes.number,
  currentChapter: PropTypes.number,
  id: PropTypes.string,
};
export default Book;
