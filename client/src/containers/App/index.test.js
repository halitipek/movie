import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'

import App from './index'

describe('App render test', () => {
  const mockStore = configureStore()
  const initialState = {
    search: {
      data: [
        {
          "Title": "The Lord of the Rings: The Fellowship of the Ring",
          "Year": "2001",
          "imdbID": "tt0120737",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
        }
      ],
      loading: false,
      error: ''
    }
  }

  let store, wrapper

  beforeEach(()=>{
    store = mockStore(initialState)
    wrapper = mount( <Provider store={store}><App /></Provider> )
  })

  it('Render the App container', () => {
    expect(wrapper.find(App).length).toEqual(1)
  })

  it('Check prop matches with initialState', () => {
    expect(wrapper.find(App).prop('loading')).toEqual(initialState.loading)
  })

  it('Check list item', () => {
    expect(wrapper.contains(initialState.search.data[0].Title)).toEqual(true)
  })
})