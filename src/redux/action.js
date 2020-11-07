import remove from 'lodash.remove';

// Action Types
export const IS_LOGGED_IN = 'IS_LOGGED_IN';

// Action Cretors
export function isLoggedIn() {
  return {
    type: IS_LOGGED_IN,
    isLoggedIn: !isLoggedIn,
  };
}
const initialState = false;
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return !state;
    default:
      return state;
  }
};

export default myReducer;
// // Action Types
// export const IS_LOGGED_IN = 'IS_LOGGED_IN';

// // Action Cretors
// export function isLoggedIn() {
//   return {
//     type: IS_LOGGED_IN,
//     isLoggedIn: !isLoggedIn,
//   };
// }
