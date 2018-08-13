import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from './mappings'

function App(props) {
  return <div>
    <h1>Let's build a mouse maze and then write a genetic algorithm to solve it!</h1>
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(App)