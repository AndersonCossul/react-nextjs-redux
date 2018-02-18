import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import burgerBuilderReducer from './reducers/burgerBuilder'
import orderPurchaseReducer from './reducers/orderPurchase'
import orderReducer from './reducers/order'
import authReducer from './reducers/auth'

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  orderPurchase: orderPurchaseReducer,
  order: orderReducer,
  auth: authReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store