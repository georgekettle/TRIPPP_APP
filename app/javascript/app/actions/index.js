const BASE_URL = '/api/v1';
import history from '../history.js';

export const FETCH_PIN = 'FETCH_PIN';
export const FETCH_PINS = 'FETCH_PINS';
export const PIN_CREATED = 'PIN_CREATED';
export const PHOTO_CREATED = 'PHOTO_CREATED';
export const PIN_HOVERED = 'PIN_HOVERED';
export const FETCH_TRIP = 'FETCH_TRIP';
export const FETCH_TRIPS = 'FETCH_TRIPS';
export const TOGGLE_MAP = 'TOGGLE_MAP';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

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

export function createPhoto(formPayLoad) {
  // user_name is irrelevant, could possibly change api call for creating pins
  const url = `${BASE_URL}/photos`;
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify({"form": formPayLoad})
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
  const url = '/users/sign_in';
  const body = {
    user: {
      email: email,
      password: password
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
        return response.json().then(json => {
            var error = new Error(json.message);
            error.response = response;
            return null;
            alert("Error logging in");
            throw error;
        });
    } else {
        console.log("Response is ok");
        history.push('/');
        return response.json();
    }
  })

  return {
    type: LOGIN_USER,
    payload: promise // Will be resolved by redux-promise
  };
}

export function logoutUser(user) {
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
        window.alert("Error logging out");
        var text = {success:false};
        return text;
    } else {
        history.push('/login');
        window.alert("You have logged out successfully");
        var text = {success:true};
        return text;
    }
  })

  return {
    type: LOGOUT_USER,
    payload: promise // Will be resolved by redux-promise
  };
}

