const BASE_URL = '/api/v1';

export const TAB_SELECTED = 'TAB_SELECTED';
export const FETCH_PINS = 'FETCH_PINS';
export const FETCH_TRIPS = 'FETCH_TRIPS';

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

export function fetchTrips(user_name) {
  const url = `${BASE_URL}/users/${user_name}/trips`;
  console.log(url);
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());


  return {
    type: FETCH_TRIPS,
    payload: promise // Will be resolved by redux-promise
  };
}
