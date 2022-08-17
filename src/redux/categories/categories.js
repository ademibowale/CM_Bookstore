// Action
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const category = [];
// Reducer
export default function categoriesReducer(state = category, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

// Action Creators
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
