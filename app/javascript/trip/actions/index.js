const BASE_URL = '/api/v1';

export const FETCH_PINS = 'FETCH_PINS';
export const PIN_CREATED = 'PIN_CREATED';
export const PHOTO_CREATED = 'PHOTO_CREATED';
export const PIN_HOVERED = 'PIN_HOVERED';

export function fetchPins(trip_id) {
  const url = `${BASE_URL}/trips/${trip_id}/pins`;
  console.log(url);
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: FETCH_PINS,
    payload: promise // Will be resolved by redux-promise
  };
}

export function hoverPin(pin_id) {
  return {
    type: PIN_HOVERED,
    payload: { pin_id } // Will be resolved by redux-promise
  };
}
