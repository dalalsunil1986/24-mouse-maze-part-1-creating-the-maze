import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './mappings'
import Tile from '../tile'

import './styles.css'

function Maze(props) {
  const size = props.size || 400

  return <div
    className="maze"
    style={{
      width: size,
      height: size,
      top: (document.documentElement.clientHeight - size) / 2,
      left: (document.documentElement.clientWidth - size) / 2,
    }}
  >
  {
    props.state.tiles.map(row => row.map(type => <Tile type={type} />))
  }
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(Maze)