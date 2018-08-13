export function mapStateToProps(state) {
  return {
    state: {
      tiles: state.maze,
    }
  }
}
