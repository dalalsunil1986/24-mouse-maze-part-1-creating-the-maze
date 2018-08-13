import React from 'react'

import './styles.css'

function getClassName(type) {
  switch(type) {
    case '0':
      return 'empty'
    case '1':
      return 'wall'
    default:
      return 'empty'
  }
}

export default function Tile(props) {
  const size = props.size || 20

  return <div
    className={`tile ${getClassName(props.type)}`}
    style={{
      width: size,
      height: size,
    }}
  />
}