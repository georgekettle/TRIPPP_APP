const BASE_URL = '/api/v1';

export const TAB_SELECTED = 'TAB_SELECTED';
export const FETCH_PINS = 'FETCH_PINS';
export const FETCH_TRIPS = 'FETCH_TRIPS';
export const PIN_CREATED = 'PIN_CREATED';

export function selectTab(tab) {
  return {
    type: TAB_SELECTED,
    payload: tab
  };
}

export function fetchPins(user_name) {
  const url = `${BASE_URL}/users/${user_name}/pins`;
  console.log(url);
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());


  return {
    type: FETCH_PINS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createPin(user_name, photo_id, trip_id, destination_id, caption) {
  // user_name is irrelevant, could possibly change api call for creating pins
  const url = `${BASE_URL}/pins`;
  const body = { photo_id, trip_id, destination_id, caption };
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

export function fetchTrips(user_name) {
  const url = `${BASE_URL}/users/${user_name}/trips`;
  console.log(url);
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());


  return {
    type: FETCH_TRIPS,
    payload: promise // Will be resolved by redux-promise
  };
}
