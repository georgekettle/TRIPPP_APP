// app/javascript/profile/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PinShow from './containers/pin_show';
import CreatePin from './containers/create_pin';
import pinsReducer from './reducers/pins_reducer';
import pinsListReducer from './reducers/pins_list_reducer';
import photosReducer from './reducers/photos_reducer';
import pinHoverReducer from './reducers/pin_hover_reducer';

const pinContainer = document.getElementById('pin');
const currentUser = JSON.parse(pinContainer.dataset.currentuser);
console.log(JSON.parse(pinContainer.dataset.pin));

const initialState = {
  selectedPhoto: {},
  currentUser: currentUser,
  selectedPin: JSON.parse(pinContainer.dataset.pin)
};

const reducers = combineReducers({
  pins: pinsListReducer,
  selectedPin: pinsReducer,
  selectedPhoto: photosReducer,
  hoveredPin: pinHoverReducer,
  currentUser: (state = null, action) => state
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/pins/new" component={CreatePin} />
        <Route path="/pins/:id" component={PinShow} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  pinContainer
);

