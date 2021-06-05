import { configureStore } from '@reduxjs/toolkit'
import reducer from './todos'

export default function configStore() {
  return configureStore({reducer})
}