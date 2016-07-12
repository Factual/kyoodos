import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/reducer'

export default function configureStore(initialState) {

  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    )
  )

}
