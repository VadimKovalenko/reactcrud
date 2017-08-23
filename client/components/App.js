import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import NotesList from './NotesList';

import reducer from './../reducers';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
        	<NotesList/>
        </Provider>
		);
  }
}