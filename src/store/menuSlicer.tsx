import React from 'react'
import 'regenerator-runtime/runtime'
import { createSlice } from '@reduxjs/toolkit'

export type IMenuItem = {
    value: string
    icon: React.ReactNode
    path: string
}

export type menuState = { items: IMenuItem[] }

export const initialState: menuState = {
    items: [
        { value: 'Home', icon: '', path: '/home' },
        { value: 'Samples', icon: '', path: '/samples' }
    ]
}

export const menuSlicer = createSlice({
    name: 'menu',
    initialState,
    reducers: {}
})

export default menuSlicer
