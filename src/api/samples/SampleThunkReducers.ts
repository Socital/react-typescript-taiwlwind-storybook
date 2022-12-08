import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { samplesState } from '../../store/sampleSlicer'
import Thunks from './SampleThunks'
import {ISample} from './Sample'

export default (builder: ActionReducerMapBuilder<samplesState>): void => {
    /**
     * GET
     */
    builder
    .addCase(Thunks.get.pending, (state) => {
        state.loading = true
    })
    .addCase(Thunks.get.fulfilled, (state, { payload }) => {
        state.sample = payload
        state.loading = false
    })
    .addCase(Thunks.get.rejected, (state, payload) => {
        state.loading = false
    })

    /**
     * GET MANY
     */
    builder
    .addCase(Thunks.getMany.pending, (state) => {
        state.loading = true
    })
    .addCase(Thunks.getMany.fulfilled, (state, { payload }) => {
        state.samples = payload
        state.loading = false
    })
    .addCase(Thunks.getMany.rejected, (state, payload) => {
        state.loading = false
    })

    /**
     * GET PAGE
     */
    builder
    .addCase(Thunks.getPage.pending, (state) => {
        state.loading = true
    })
    .addCase(Thunks.getPage.fulfilled, (state, { payload }) => {
        state.loading = false
        state.samples = payload.resources
        state.count = payload.count
    })
    .addCase(Thunks.getPage.rejected, (state, payload) => {
        state.loading = false
    })

    /**
     * SAVE
     */
    builder
    .addCase(Thunks.save.pending, (state) => {
        state.loading = true
    })
    .addCase(Thunks.save.fulfilled, (state, { payload }) => {
        state.samples.push(payload)
    })
    .addCase(Thunks.save.rejected, (state, payload) => {
        state.loading = false
    })

    /**
     * UPDATE
     */
    builder
    .addCase(Thunks.update.pending, (state) => {
        state.loading = true
    })
    .addCase(Thunks.update.fulfilled, (state, { payload }) => {
        state.samples = state.samples.map((sample: ISample) => {
            if (sample.id === payload.id) sample = payload
            return sample
        })
        state.loading = false
    })
    .addCase(Thunks.update.rejected, (state, payload) => {
        state.loading = false
    })

    /**
     * DELETE
     */
    builder
    .addCase(Thunks.delete.pending, (state) => {
        state.loading = true
    })
    .addCase(Thunks.delete.fulfilled, (state, { payload }) => {
        state.samples = state.samples.filter((sample: ISample) => sample.id !== payload.id)
        state.loading = false
    })
    .addCase(Thunks.delete.rejected, (state, payload) => {
        state.loading = false
    })
}
