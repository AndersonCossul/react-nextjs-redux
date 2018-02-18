import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../redux/store';

const page = (Page) => {
  return (
    class PageWrapper extends Component {
      render() {
        return (
          <Provider store={store}>
            <Page />
          </Provider>
        )
      }
    }
  )
}
export default page;