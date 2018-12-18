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
import photosReducer from './reducers/photos_reducer';

const pinContainer = document.getElementById('pin');
const currentUser = JSON.parse(pinContainer.dataset.currentuser)

const initialState = {
  selectedPhoto: {},
  currentUser: currentUser,
  selectedPin: {
    caption: "This trip we were based in Positano",
    destination_id: 1,
    id: 2,
    photo: {
      img_url: "https://i.pinimg.com/564x/6a/65/27/6a6527f3a66e8b44a39468affc97b632.jpg"
    },
    photo_id: 2,
    trip: {
      title: "Title"
    },
    trip_id: 2,
    user: {
      photo: "https://instagram.fsyd5-1.fna.fbcdn.net/vp/a5a9e47acd796e82b4ae6b119dc98a71/5C938829/t51.2885-19/s320x320/44518843_273689646684456_8468654155899076608_n.jpg?_nc_ht=instagram.fsyd5-1.fna.fbcdn.net",
      user_name: "tessa_amberly"
    },
    user_id: 1
  }
};

const reducers = combineReducers({
  selectedPin: pinsReducer,
  selectedPhoto: photosReducer,
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

