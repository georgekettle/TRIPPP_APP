export default function(state = {}, action) {
  switch (action.type) {
    case 'ADD_USER':
      return action.payload;
    case 'REMOVE_USER':
      return null;
    default:
      return state;
  }
}
