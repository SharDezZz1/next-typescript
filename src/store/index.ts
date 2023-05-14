import { configureStore } from '@reduxjs/toolkit'
import counterReduser from './futures/counter'
//futures
import cartReduser from './futures/cart'

export const store = configureStore({
  reducer: {
    counter: counterReduser,
    cart: cartReduser,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;