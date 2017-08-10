import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import NoteForm from './NoteForm';
import NotesList from './NotesList';

import reducer from './../reducers';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
        <Provider store={store}>
        	<NotesList notes = {this.props.notes}/>
        </Provider>
		);
  }
}

//Следим за изменениями в store и выполняем данный код каждый раз, когда в него приходят новые данные
store.subscribe(() => {
	console.log('subscribe', store.getState());
});

console.log('First App state ', store.getState());