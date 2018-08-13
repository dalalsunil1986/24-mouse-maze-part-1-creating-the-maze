import { createStore, combineReducers } from 'redux'
import mazeReducer from '../reducers/maze'

const rootReducer = combineReducers({
  maze: mazeReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store