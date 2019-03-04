const BASE_URL = '/api/v1';
import history from '../history.js';

export const FETCH_PIN = 'FETCH_PIN';
export const FETCH_PINS = 'FETCH_PINS';
export const PIN_CREATED = 'PIN_CREATED';
export const NEW_PIN_CREATED = 'NEW_PIN_CREATED';
export const PHOTO_CREATED = 'PHOTO_CREATED';
export const PIN_HOVERED = 'PIN_HOVERED';
export const FETCH_TRIP = 'FETCH_TRIP';
export const FETCH_TRIPS = 'FETCH_TRIPS';
export const TOGGLE_MAP = 'TOGGLE_MAP';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export function fetchPin(pin_id) {
  const url = `${BASE_URL}/pins/${pin_id}`;
  console.log(url);
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json())
  .then(console.log(promise));
  return {
    type: FETCH_PIN,
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchPins(id, context) {
  switch(context) {
    case 'pin-show':
      var url = `${BASE_URL}/users/${id}/pins`;
      break;
    case 'trip':
      var url = `${BASE_URL}/trips/${id}/pins`;
  };
  console.log("this is the url");
  console.log(url);
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json())
  .then(console.log(promise));
  return {
    type: FETCH_PINS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createPhoto(formData) {
  // user_name is irrelevant, could possibly change api call for creating pins
  console.log('THIS IS THE formData');
  console.log(formData);
  // const body = {"formData": formData};
  const url = `${BASE_URL}/photos`;
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: formData
  }).then(r => r.json());

  return {
    type: PHOTO_CREATED,
    payload: promise // Will be resolved by redux-promise
  };
}

function logToConsole(value) {
  console.log(value)
}

export function createPin(photo_id, trip_id, destination_id, title, description, pin_url) {
  // user_name is irrelevant, could possibly change api call for creating pins
  const url = `${BASE_URL}/pins`;
  const body = { photo_id, trip_id, destination_id, title, description, pin_url };
  console.log("This is the body");
  console.log(body);
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: PIN_CREATED,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createNewPin(photo_id, trip_id, destination_id, title, description, pin_url) {
  return (dispatch) => {
    // user_name is irrelevant, could possibly change api call for creating pins
    const url = `${BASE_URL}/pins`;
    const body = { photo_id, trip_id, destination_id, title, description, pin_url };
    console.log("This is the body");
    console.log(body);
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const promise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    }).then(response => {
      if (!response.ok) {
          dispatch(addAlert("Something went wrong when creating your pin.", "error-alert"));
      } else {
          console.log("Response is ok");
          dispatch(addAlert("New pin successfully created!", "success-alert"));
          dispatch(newPinCreated(response.json()))
      }
    })
  }
}

export function newPinCreated(pin) {
  return {
    type: NEW_PIN_CREATED,
    payload: pin // Will be resolved by redux-promise
  };
}

export function hoverPin(pin_id) {
  return {
    type: PIN_HOVERED,
    payload: { pin_id } // Will be resolved by redux-promise
  };
}

export function fetchTrips(user_name) {
  const url = `${BASE_URL}/users/${user_name}/trips`;
  console.log(url);
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: FETCH_TRIPS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function fetchTrip(id) {
  const url = `${BASE_URL}/trips/${id}`;
  console.log(url);
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json())
  .then(console.log(promise));

  return {
    type: FETCH_TRIP,
    payload: promise // Will be resolved by redux-promise
  };
}

export function toggleMapAction(new_state) {
  return {
    type: TOGGLE_MAP,
    payload: new_state // Will be resolved by redux-promise
  };
}

export function loginUser(email, password) {
  return (dispatch) => {
    const url = '/users/sign_in';
    const body = {
      user: {
        email: email,
        password: password
      }
    };
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const promise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    }).then(response => {
      if (!response.ok) {
          console.log("Response is NOT ok");
          console.log(response);
          dispatch(addAlert("Wrong Email & Password Combination", "error-alert"));
          return null;
      } else {
          console.log("Response is ok");
          history.push('/');
          dispatch(addAlert("Welcome home traveller!", "success-alert"));
          dispatch(addUser(response.json()))
      }
    })
  }
}

export function logoutUser(user) {
  return (dispatch) => {

    const url = '/users/sign_out';
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const promise = fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin',
      body: JSON.stringify(user)
    }).then(response => {
      if (!response.ok) {
          dispatch(addAlert("Error logging out", "error-alert"));
      } else {
          history.push('/login');
          dispatch(addAlert("You have logged out successfully", "success-alert"));
          dispatch(removeUser());
      }
    })
  }
}

export function signupUser(user_name, email, password, password_confirmation) {
  return (dispatch) => {
    const url = '/users';
    const body = {
      user: {
        user_name: user_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    };
    console.log("This is the body");
    console.log(body);
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const promise = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    }).then(response => {
      if (!response.ok) {
          console.log("Response is NOT ok");
          console.log(response);
          dispatch(addAlert("Error Creating your account", "error-alert"));
      } else {
          console.log("Response is ok");
          history.push('/');
          dispatch(addAlert("Welcome to Wanderrr!", "success-alert"));
          dispatch(addUser(response.json()));
      }
    })
  }
}

export function editUser(user_name, email, profile_url, photo_id, description) {
  return (dispatch) => {
    const url = '/users';
    const body = {
      user: {
        user_name: user_name,
        email: email,
        profile_url: profile_url,
        photo_id: photo_id,
        description: description
      }
    };
    console.log("This is the body");
    console.log(body);
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const promise = fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    }).then(response => {
      if (!response.ok) {
          console.log("Response is NOT ok");
          console.log(response);
          dispatch(addAlert("Error Updating your profile", "error-alert"));
      } else {
          console.log("Response is ok");
          history.push('/');
          dispatch(addAlert("Welcome to Wanderrr!", "success-alert"));
          dispatch(addUser(response.json()));
      }
    })
  }
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user // Will be resolved by redux-promise
  };
}

export function removeUser() {
  return {
    type: REMOVE_USER,
    payload: null // Will be resolved by redux-promise
  };
}

export function addAlert(text, style) {
  return {
    type: ADD_ALERT,
    text,
    style
  };
}

export function removeAlert(id) {
  return {
    type: REMOVE_ALERT,
    id
  };
}
