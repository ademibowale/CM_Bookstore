// Action
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

export const category = '';
// Reducer
export default function categoriesReducer(state = category, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
