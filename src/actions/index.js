// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const ADD_CAR = 'ADD_CAR';

export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;

  const promise = fetch(url).then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  }
};

export function addCar(garage, car, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/car`;

  const request = fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
    }).then(response => response.json())
      .then(() => callback());

  return {
    type: ADD_CAR,
    payload: request
  };
}
