export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_CURRENT_USER_TRIPS':
      return action.payload;
    case 'TRIP_CREATED':
      state.push(action.payload);
      return state;
    case 'PIN_ADDED_TO_TRIP':
      return action.payload;
    case 'PIN_DELETED_FROM_TRIP':
      return action.payload;
    default:
      return state;
  }
}
