export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_TRIPS':
      return action.payload;
    // case 'FETCH_CURRENT_USER_TRIPS':
    //   return action.payload;
    default:
      return state;
  }
}
