import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'

const List = ({ data }) => {
  const renderItem = data.map((item, i) => (
    <div className="column is-half-mobile is-one-third-tablet" id={'m_i_' + item.Title + '_' + i} key={'m_i_' + item.Title + '_' + i}>
      <ListItem poster={item.Poster} title={item.Title} />
    </div>
  ))

  return (
    <section className="section">
      <div className="container is-widescreen">
        <div className="columns is-multiline is-mobile">
          {renderItem}
        </div>
      </div>
    </section>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

export default List