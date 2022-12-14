import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Book from './Book';
import Form from './Form';
import { fetchBook } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.allBooks);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <>
    <main>
      <div>
        <section>
          {books.map((bk) => (
            <Book
              category={bk.category}
              title={bk.title}
              author={bk.author}
              key={bk.item_id}
              id={bk.item_id}
            />
          ))}
        </section>
        <section className="form">
          <hr />
          <Form />
        </section>
      </div>
    </main>
   </>
  );
}

export default Books;
