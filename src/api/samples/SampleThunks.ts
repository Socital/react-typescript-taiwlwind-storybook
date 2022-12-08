import { ThunkGenerator } from '../ThunkGenerator'
import CampaignResource from './SampleResource'
import {ISample} from './Sample'

const SampleThunks = new ThunkGenerator<ISample>()
const resource = new CampaignResource()

export default {
    get: SampleThunks.generateGet('Samples/get', (resourceID) => {
        return resource.get(resourceID)
    }),
    getMany: SampleThunks.generateGetMany('Samples/getMany', (filters) => {
        return resource.getMany(filters)
    }),
    getPage: SampleThunks.generateGetPage('Samples/getPage', (filters) => {
        return resource.getPage(filters)
    }),
    save: SampleThunks.generatePost('Samples/post', (resourceData) => {
        return resource.post(resourceData)
    }),
    update: SampleThunks.generatePatch('Samples/put', (updatePayload) => {
        return resource.put(updatePayload.id, updatePayload.resource)
    }),
    delete: SampleThunks.generateDelete('Samples/delete', (troopID) => {
        return resource.delete(troopID)
    })
}
