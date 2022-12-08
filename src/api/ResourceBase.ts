import CONFIG from '../config'

export type requestPropsType<ResourceType> = {
    method: 'POST' | 'PUT' | 'PATCH' | 'GET' | 'DELETE'
    urlPath: string,
    queryParameters?: Record<string, string>
    headers?: { [key: string]: string },
    body?: Partial<ResourceType>
}

class ResourceBase<ResourceType, ResourceResponseType> {
    async request (props: requestPropsType<ResourceType>): Promise<ResourceResponseType> {
        const { urlPath, method, headers = {}, body } = props

        const queryParametersString = props.queryParameters && new URLSearchParams(props.queryParameters).toString()

        let url = `${CONFIG.api}${urlPath}`
        if (queryParametersString !== undefined) {
            url += '?' + queryParametersString
        }

        headers['Content-Type'] = 'application/json'
        const apiResponse = await fetch(
            url,
            {
                method: method,
                headers,
                body: JSON.stringify(body)
            }
        )
        if (apiResponse.status !== 200) throw new Error(apiResponse.statusText)
        return await apiResponse.json() as ResourceResponseType
    }
}

export default ResourceBase
