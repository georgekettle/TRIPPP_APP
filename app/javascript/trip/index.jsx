// app/javascript/profile/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TripShow from './containers/trip_show';
import pinsReducer from './reducers/pins_reducer';
import pinsListReducer from './reducers/pins_list_reducer';
import pinHoverReducer from './reducers/pin_hover_reducer';

const tripContainer = document.getElementById('trip');
const currentUser = JSON.parse(tripContainer.dataset.currentuser);
const selectedTrip = JSON.parse(tripContainer.dataset.trip);
const tripPins = JSON.parse(tripContainer.dataset.pins);
console.log("These are the pins");
console.log(tripPins);
console.log("The selectedTrip");
console.log(selectedTrip);

const initialState = {
  currentUser: currentUser,
  selectedTrip: selectedTrip,
  pins: tripPins
};

const reducers = combineReducers({
  pins: pinsListReducer,
  hoveredPin: pinHoverReducer,
  currentUser: (state = null, action) => state,
  selectedTrip: (state = null, action) => state
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/trips/:id" component={TripShow} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  tripContainer
);

