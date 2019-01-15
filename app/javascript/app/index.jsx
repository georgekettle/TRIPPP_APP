// app/javascript/profile/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PinShow from './containers/pin_show';
import TripShow from './containers/trip_show';
import Home from './components/home';
import Profile from './components/profile';
import CreatePin from './containers/create_pin';
import pinsReducer from './reducers/pins_reducer';
import pinsListReducer from './reducers/pins_list_reducer';
import photosReducer from './reducers/photos_reducer';
import pinHoverReducer from './reducers/pin_hover_reducer';
import tripsReducer from './reducers/trips_reducer';
import toggleMapReducer from './reducers/toggle_map_reducer';

const appContainer = document.getElementById('app');
const currentUser = JSON.parse(appContainer.dataset.currentuser);

const initialState = {
  selectedPhoto: {},
  currentUser: currentUser,
  selectedPin: {
    caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    created_at:"2018-12-29T00:27:33.775Z",
    destination:{
      g_places_id:"ChIJ7YKG_u8pQAwRPK9LyPFLGrA",
      latitude:40.5632,
      longitude:14.2522
    },
    destination_id:3,
    id:3,
    photo:{
      img_url:"https://i.pinimg.com/originals/f1/f5/8d/f1f58d0c3d5f15b4b692f981bb1936eb.jpg"
    },
    photo_id:3,
    title:"Day trip to Capri",
    trip: {
      title:"Italian Boating"
    },
    trip_id:2,
    updated_at:"2018-12-29T00:27:33.775Z",
    url:"https://i.pinimg.com/originals/f1/f5/8d/f1f58d0c3d5f15b4b692f981bb1936eb.jpg",
    user: {
      photo:"https://instagram.fsyd5-1.fna.fbcdn.net/vp/a5a9e47acd796e82b4ae6b119dc98a71/5C938829/t51.2885-19/s320x320/44518843_273689646684456_8468654155899076608_n.jpg?_nc_ht=instagram.fsyd5-1.fna.fbcdn.net",
      user_name:"tessa_amberly"
    },
    user_id:1,
  }, // JSON.parse(appContainer.dataset.pin)
  pins: [
    {
      caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      created_at:"2018-12-29T00:27:33.775Z",
      destination:{
        g_places_id:"ChIJ7YKG_u8pQAwRPK9LyPFLGrA",
        latitude:40.5632,
        longitude:14.2522
      },
      destination_id:3,
      id:3,
      photo:{
        img_url:"https://i.pinimg.com/originals/f1/f5/8d/f1f58d0c3d5f15b4b692f981bb1936eb.jpg"
      },
      photo_id:3,
      title:"Day trip to Capri",
      trip: {
        title:"Italian Boating"
      },
      trip_id:2,
      updated_at:"2018-12-29T00:27:33.775Z",
      url:"https://i.pinimg.com/originals/f1/f5/8d/f1f58d0c3d5f15b4b692f981bb1936eb.jpg",
      user: {
        photo:"https://instagram.fsyd5-1.fna.fbcdn.net/vp/a5a9e47acd796e82b4ae6b119dc98a71/5C938829/t51.2885-19/s320x320/44518843_273689646684456_8468654155899076608_n.jpg?_nc_ht=instagram.fsyd5-1.fna.fbcdn.net",
        user_name:"tessa_amberly"
      },
      user_id:1,
    }
  ],
  selectedTrip: {
    user: {
      photo:"https://instagram.fsyd5-1.fna.fbcdn.net/vp/a5a9e47acd796e82b4ae6b119dc98a71/5C938829/t51.2885-19/s320x320/44518843_273689646684456_8468654155899076608_n.jpg?_nc_ht=instagram.fsyd5-1.fna.fbcdn.net",
      user_name:"tessa_amberly"
    },
    title:"Italian Boating",
    id: 1
  },
  trips: [
  ],
  toggleMap: true
};

const reducers = combineReducers({
  selectedTrip: (state = null, action) => state,
  trips: tripsReducer,
  pins: pinsListReducer,
  selectedPin: pinsReducer,
  selectedPhoto: photosReducer,
  hoveredPin: pinHoverReducer,
  currentUser: (state = null, action) => state,
  toggleMap: toggleMapReducer
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:user_name/:tab" component={Profile} />
        <Route path="/profile/:user_name" component={Profile} />
        <Route path="/trips/:id" component={TripShow} />
        <Route path="/pins/new" component={CreatePin} />
        <Route path="/pins/:id" component={PinShow} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  appContainer
);

