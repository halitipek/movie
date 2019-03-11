import React from 'react'
import PropTypes from 'prop-types'

import placeholderImg from '../../assets/placeholder.png'

const ListItem = ({ poster, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by4">
          <img src={poster === 'N/A' || !poster ? placeholderImg : poster} alt={title} />
        </figure>
      </div>
      <div className="card-content has-text-centered">
        {title}
      </div>
    </div>
  )
}

ListItem.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default ListItem