import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import Home from '../components/Home'

// @todo look into how this works
const store = configureStore()
export default class Portfolio extends Component {

  render() {
    return (
		<Provider store={store}>
			<Home/>
		</Provider>
    )
  }
}
