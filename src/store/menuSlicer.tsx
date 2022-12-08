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
        { value: 'Αρχική', icon: <span></span>, path: '/home' },
        { value: 'Ομάδες', icon: <span></span>, path: '/groups' },
        { value: 'Θαλαμοι', icon: <span></span>, path: '/rooms' },
        { value: 'Λόχοι', icon: <span></span>, path: '/troops' },
        { value: 'Προπαιδευόμενοι', icon: <span></span>, path: '/recruits' },
        { value: 'Προπαιδευτές', icon: <span></span>, path: '/trainers' },
        { value: 'ΕΣΣΟ', icon: <span></span>, path: '/trainingDivisions' }
    ]
}

export const menuSlicer = createSlice({
    name: 'recruits',
    initialState,
    reducers: {}
})

export default menuSlicer
