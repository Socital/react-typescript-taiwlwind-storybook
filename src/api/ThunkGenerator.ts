import { AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'

export type AsyncThunkAPI<ResourceType, Arguments> = AsyncThunk<
    ResourceType,
    Arguments,
    Record<string, string>
>

export type PagedResource<ResourceType> = {
    resources: ResourceType[],
    count: number
}

type updateResource<ResourceType> = {
    id: number,
    resource: Partial<ResourceType>
}

export class ThunkGenerator<Resource> {
    protected extractErrorMessage (error: unknown): string {
        if (error instanceof Error) return error.message
        return String(error)
    }

    generateGet (name: string, request: (id: number) => Promise<Resource>): AsyncThunkAPI<Resource, number> {
        const handler: AsyncThunkPayloadCreator<Resource, number> = async (id, { rejectWithValue }) => {
            try {
                return request(id)
            } catch (err) {
                return rejectWithValue(this.extractErrorMessage(err))
            }
        }
        return createAsyncThunk(name, handler)
    }

    generateGetMany (name: string, request: (filters: Record<string, any>) => Promise<Resource[]>): AsyncThunkAPI<Resource[], Record<string, any>> {
        const handler: AsyncThunkPayloadCreator<Resource[], Record<string, any>> = async (filters, { rejectWithValue }) => {
            try {
                return request(filters)
            } catch (err) {
                return rejectWithValue(this.extractErrorMessage(err))
            }
        }
        return createAsyncThunk(name, handler)
    }

    generateGetPage (name: string, request: (filters: Record<string, any>) => Promise<PagedResource<Resource>>): AsyncThunkAPI<PagedResource<Resource>, Record<string, any>> {
        const handler: AsyncThunkPayloadCreator<PagedResource<Resource>, Record<string, any>> = async (filters, { rejectWithValue }) => {
            try {
                return request(filters)
            } catch (err) {
                return rejectWithValue(this.extractErrorMessage(err))
            }
        }
        return createAsyncThunk(name, handler)
    }

    generatePost (name: string, request: (payload: Resource) => Promise<Resource>): AsyncThunkAPI<Resource, Resource> {
        const handler: AsyncThunkPayloadCreator<Resource, Resource> = async (payload, { rejectWithValue }) => {
            try {
                return request(payload)
            } catch (err) {
                return rejectWithValue(this.extractErrorMessage(err))
            }
        }
        return createAsyncThunk(name, handler)
    }

    generatePut (name: string, request: (payload: updateResource<Resource>) => Promise<Resource>): AsyncThunkAPI<Resource, updateResource<Resource>> {
        const handler: AsyncThunkPayloadCreator<Resource, updateResource<Resource>> = async (payload, { rejectWithValue }) => {
            try {
                return request(payload)
            } catch (err) {
                return rejectWithValue(this.extractErrorMessage(err))
            }
        }
        return createAsyncThunk(name, handler)
    }

    generatePatch (name: string, request: (payload: updateResource<Resource>) => Promise<Resource>): AsyncThunkAPI<Resource, updateResource<Resource>> {
        const handler: AsyncThunkPayloadCreator<Resource, updateResource<Resource>> = async (payload, { rejectWithValue }) => {
            try {
                return request(payload)
            } catch (err) {
                return rejectWithValue(this.extractErrorMessage(err))
            }
        }
        return createAsyncThunk(name, handler)
    }

    generateDelete (name: string, request: (id: number) => Promise<Resource>): AsyncThunkAPI<Resource, number> {
        const handler: AsyncThunkPayloadCreator<Resource, number> = async (id, { rejectWithValue }) => {
            try {
                return request(id)
            } catch (err) {
                return rejectWithValue(this.extractErrorMessage(err))
            }
        }
        return createAsyncThunk(name, handler)
    }
}
