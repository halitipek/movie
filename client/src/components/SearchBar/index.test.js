import React from 'react'
import { shallow } from 'enzyme'

import SearchBar from './index'
import App from '../../containers/App'

it('SearchBar test', () => {
  const state = {
    keyword: 'spiderman'
  }

  const handleChange = (e) => {
    state.keyword = e.target.value
  }

  const searchBar = shallow(<SearchBar keyword={state.keyword} loading={false} handleChange={handleChange} />)
  searchBar.find('input').simulate('focus')
  searchBar.find('input').simulate('change', { target: { value: 'batman' } })
  expect(state.keyword).toEqual('batman')
})