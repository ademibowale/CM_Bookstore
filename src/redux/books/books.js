import axios from 'axios';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const allBooks = [];

// Reducer
export default function bookReducer(state = allBooks, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((item) => item.item_id !== action.payload.item_id);

    case GET_BOOKS: {
      return action.payload;
    }

    default:
      return state;
  }
}

// Action Creators
const fetch = (books) => ({
  type: GET_BOOKS,
  payload: books,
});

// baseUrl
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/T0lJq4hePa59qV5pJzMe/books';

export const fetchBook = () => async (dispatch) => {
  const response = await axios.get(url);
  const booksFetched = Object.entries(response.data).map((item) => {
    const {
      title, author, category,
    } = item[1][0];
    return {
      item_id: item[0],
      title,
      author,
      category,
    };
  });
  dispatch(fetch(booksFetched));
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

export const addBookStore = (book) => async (dispatch) => {
  await axios.post(url, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(addBook(book));
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    item_id: id,
  },
});

export const removeBookStore = (id) => async (dispatch) => {
  await axios.delete(`${url}/${id}`);
  dispatch(removeBook(id));
};
