export default function(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return (action.payload.success) ? null : state;
    case 'SIGNUP_USER':
      return action.payload;
    default:
      return state;
  }
}
