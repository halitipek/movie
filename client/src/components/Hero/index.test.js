import React from 'react'
import { shallow } from 'enzyme'

import Hero from './index'

it('Hero render test', () => {
  const hero = shallow(<Hero error="Some error occured" />)
  expect(hero.text()).toEqual('Some error occured')
})