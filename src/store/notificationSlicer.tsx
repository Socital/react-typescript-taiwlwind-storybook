import 'regenerator-runtime/runtime'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface INotification {
    id: string
    message: string
    type: 'info' | 'warning' | 'error'
    details: string
}

export type NotificationState = {
    notifications: INotification[]
}

export const initialState: NotificationState = {
    notifications: []
}

export const notificationsSlicer = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state: NotificationState, { payload }: PayloadAction<INotification>) => {
            state.notifications.push(payload)
        },
        dismissNotification: (state: NotificationState, { payload }: PayloadAction<string>) => {
            state.notifications.filter((notification) => notification.id !== payload)
        }
    }
})

export const { addNotification, dismissNotification } = notificationsSlicer.actions
export default notificationsSlicer
