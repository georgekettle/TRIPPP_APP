export default function(state = {}, action) {
  switch (action.type) {
    case 'PHOTO_CREATED':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
