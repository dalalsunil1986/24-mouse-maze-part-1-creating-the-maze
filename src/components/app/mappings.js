export function mapStateToProps(state) {
  return {
    state: {
      tiles: state.maze,
    }
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: {
      initializeMaze: (tiles) => {
        dispatch({ type: "INITIALIZE_MAZE", payload: tiles })
      },
      initializeSolutions: (solutions) => {
        dispatch({ type: "INITIALIZE_SOLUTIONS", payload: solutions })
      }
    }
  }
}