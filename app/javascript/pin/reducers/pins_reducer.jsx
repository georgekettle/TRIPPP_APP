export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_PIN':
      return action.payload;
    default:
      return state;
  }
}
