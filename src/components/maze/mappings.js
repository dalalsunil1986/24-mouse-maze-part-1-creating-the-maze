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
      
    }
  }
}