import React from 'react'
import { shallow } from 'enzyme'

import ListItem from './ListItem'

const mock = {
  "Title": "The Lord of the Rings: The Fellowship of the Ring",
  "Year": "2001",
  "imdbID": "tt0120737",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
}

it('List item test', () => {
  const item = shallow(<ListItem poster={mock.Poster} title={mock.Title} />)
  expect(item.text()).toEqual(mock.Title)
  expect(item.find(`[src="${mock.Poster}"]`).every(`[alt="${mock.Title}"]`)).toEqual(true)
})