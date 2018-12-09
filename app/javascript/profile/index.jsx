// app/javascript/profile/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from './components/profile';
import pinsReducer from './reducers/pins_reducer';
import tripsReducer from './reducers/trips_reducer';

const profileContainer = document.getElementById('profile');

const initialState = {
  pins: [
    {
      "photo": {
        "img_url": "https://i.pinimg.com/originals/72/6b/3d/726b3d01be3232a87e6f28cda97bb8cd.jpg"
      }
    },
    {
      "photo": {
        "img_url": "https://i.pinimg.com/564x/25/ff/b7/25ffb725b427180527ece3e4b268a0c1.jpg"
      }
    },
    {
      "photo": {
        "img_url": "https://i.pinimg.com/564x/50/c5/cc/50c5cc1317a87cd447dff87caba7e9af.jpg"
      }
    },
    {
      "photo": {
        "img_url": "https://i.pinimg.com/564x/6a/65/27/6a6527f3a66e8b44a39468affc97b632.jpg"
      }
    }
  ],
  trips: [
  ]
};

const reducers = combineReducers({
  pins: pinsReducer,
  trips: tripsReducer
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:user_name/:tab" component={Profile} />
        <Route path="/profile/:user_name" component={Profile} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  profileContainer
);
