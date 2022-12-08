import { combineReducers, configureStore } from '@reduxjs/toolkit'
import menuSlicer from './menuSlicer'
import notificationsSlicer from './notificationSlicer'
import samplesSlicer from './sampleSlicer'

const rootReducer = combineReducers({
    menu: menuSlicer.reducer,
    samples: samplesSlicer.reducer,
    notifications: notificationsSlicer.reducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
