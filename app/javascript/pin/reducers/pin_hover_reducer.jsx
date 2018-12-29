export default function(state = {}, action) {
  switch (action.type) {
    case 'PIN_HOVERED':
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
