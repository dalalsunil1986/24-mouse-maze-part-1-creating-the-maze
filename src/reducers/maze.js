export default function mazeReducer(state=[], action) {
  switch(action.type) {
    case 'INITIALIZE_MAZE':
      return [...action.payload]

    default:
      return state
  }
}