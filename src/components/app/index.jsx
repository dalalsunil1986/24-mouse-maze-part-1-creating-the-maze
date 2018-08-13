import React from 'react'
import { connect } from 'react-redux'

import Maze from '../maze'
import { mapStateToProps, mapDispatchToProps } from './mappings'

import './styles.css'
import data from '../../mazes/01.json'

class App extends React.Component {
  componentWillMount() {
    const tiles = data["rows"].map(row => row.split(''))
    this.props.actions.initializeMaze(tiles)
  }

  render() {
    return <Maze />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)