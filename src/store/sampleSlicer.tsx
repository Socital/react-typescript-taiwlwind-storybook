import 'regenerator-runtime/runtime'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import SampleThunkReducers from '../api/samples/SampleThunkReducers'

import {ISample} from '../api/samples/Sample'

export type samplesState = {
    sample: ISample | null
    samples: ISample[]
    error: string | undefined,
    loading: boolean,
    count: number
}

export const initialState: samplesState = {
    sample: null,
    samples: [],
    error: undefined,
    loading: false,
    count: 0
}

export const samplesSlicer = createSlice({
    name: 'samples',
    initialState,
    reducers: {
        setLoading: (state: samplesState, { payload }: PayloadAction<boolean>) => {
            state.loading = payload
        }
    },
    extraReducers: SampleThunkReducers
})

export const { setLoading } = samplesSlicer.actions
export default samplesSlicer
