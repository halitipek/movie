import React from 'react'
import { shallow } from 'enzyme'

import List from './index'
import ListItem from './ListItem'

const mock = [
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "imdbID": "tt0120737",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  }
]

it('List test', () => {
  const list = shallow(<List data={mock} />)
  expect(list.find(ListItem).length).toEqual(1)
})