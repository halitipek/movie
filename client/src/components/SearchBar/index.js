import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SearchBar = ({ handleChange, keyword, loading }) => {
  let controlClass = classNames({
    control: true,
    'is-loading': loading,
    'is-expanded': true
  })

  return (
    <div className="columns is-mobile is-centered is-marginless" style={{padding: 1 + 'rem', backgroundColor: '#00d1b2', marginBottom: 15 + 'px'}}>
      <div className="column is-half-desktop is-four-fifths-tablet">
        <div className="field ">
          <div className={controlClass}>
            <input
              onChange={handleChange}
              value={keyword}
              className="input is-rounded"
              type="text"
              placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  )
}

SearchBar.defaultProps = {
  keyword: '',
  loading: false
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  keyword: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  loading: PropTypes.bool
}

export default SearchBar