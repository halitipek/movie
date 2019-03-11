import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchBar from '../../components/SearchBar'
import List from '../../components/List'
import Hero from '../../components/Hero'

import { fetchRequest, clearScreen } from '../../actions'

class App extends Component {
  state = {
    keyword: '',
    viewedMovies: []
  }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
    
    if (this.props.data.length > 0 || this.props.error) {
      this.props.clearScreen()
    }

    if (e.target.value.trim().length >= 3) {
      this.props.fetchRequest(e.target.value.trim())
    }
  }

  componentDidUpdate() {
    if (this.props.data.length > 0 && this.state.keyword.length < 3) {
      this.props.clearScreen()
    }

    // Intersection

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const intersectionCallback = (entry) => {
      if (
        entry[0].isIntersecting && 
        !this.state.viewedMovies.includes(entry[0].target.id)
      ) {
        this.setState((prevState, props) => {
          const movieTitle = `Movie view: [${entry[0].target.textContent}]`
          console.log(movieTitle)

          return {
            viewedMovies: [ ...prevState.viewedMovies, entry[0].target.id]
          }
        })
      }
    }

    const observers = this.props.data.map((element, i, arr) => {
      let observer = new IntersectionObserver(intersectionCallback, options)
      observer.observe(document.getElementById('m_i_' + element.Title + '_' + i))
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          loading={this.props.loading}
          keyword={this.state.keyword}
          handleChange={this.handleChange} />
        {
          this.props.error &&
          this.props.error !== '' &&
          <Hero error={this.props.error} />
        }
        {
          this.props.data.length > 0 &&
          <List data={this.props.data} />
        }
      </div>
    )
  }
}

App.defaultProps = {
  loading: false,
  data: [],
  error: null
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  error: PropTypes.string
}

export default connect(
  ({ search: { data, loading, error } }) => ({ data, loading, error }),
  { fetchRequest, clearScreen }
)(App)
