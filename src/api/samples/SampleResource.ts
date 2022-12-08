import ResourceBase from '../ResourceBase'
import {ISample} from './Sample'
import {PagedResource} from '../ThunkGenerator'

type ResourceType = ISample
type ResourceResponse = {
    results: ISample[]
    count: number
}

export default class SampleResource extends ResourceBase<ISample, ResourceResponse> {
    private endpoint = '/samples'

    async get (resourceID: number): Promise<ResourceType> {
        const response = await this.request({
            method: 'GET',
            urlPath: `${this.endpoint}/${resourceID}`
        })
        return response.results[0]
    }

    async getPage (filters: Record<string, string>): Promise<PagedResource<ResourceType>> {
        const response = await this.request({
            method: 'GET',
            urlPath: `${this.endpoint}/`,
            queryParameters: filters
        })
        return { resources: response.results, count: response.count }
    }

    async getMany (filters: Record<string, string>): Promise<ResourceType[]> {
        const response = await this.request({
            method: 'GET',
            urlPath: `${this.endpoint}/`,
            queryParameters: filters
        })
        return response.results
    }

    async post (resource: ResourceType): Promise<ResourceType> {
        const { ...body } = resource
        const response = await this.request({
            method: 'POST',
            urlPath: `${this.endpoint}`,
            body: body
        })
        return response.results[0]
    }

    async put (resourceID: number, resource: Partial<ResourceType>): Promise<ResourceType> {
        const { ...body } = resource
        const response = await this.request({
            method: 'PUT',
            urlPath: `${this.endpoint}/${resourceID}`,
            body: body
        })
        return response.results[0]
    }

    async delete (resourceID: number): Promise<ResourceType> {
        const response = await this.request({
            method: 'DELETE',
            urlPath: `${this.endpoint}/${resourceID}`
        })
        return response.results[0]
    }
}

