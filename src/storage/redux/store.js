import { legacy_createStore as createStore } from '@reduxjs/toolkit'
import reducer from './reducers/reducer'

export const Store = createStore(reducer);