export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_PINS':
      return action.payload;
    default:
      return state;
  }
}
