export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_TRIP':
      return action.payload;
    default:
      return state;
  }
}
