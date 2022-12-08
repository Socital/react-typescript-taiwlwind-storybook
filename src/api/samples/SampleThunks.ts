import { ThunkGenerator } from '../ThunkGenerator'
import CampaignResource from './SampleResource'
import {ISample} from './Sample'

const SampleThunks = new ThunkGenerator<ISample>()
const resource = new CampaignResource()

export default {
    get: SampleThunks.generateGet('Troops/get', (resourceID) => {
        return resource.get(resourceID)
    }),
    getMany: SampleThunks.generateGetMany('Troops/getMany', (filters) => {
        return resource.getMany(filters)
    }),
    getPage: SampleThunks.generateGetPage('Troops/getPage', (filters) => {
        return resource.getPage(filters)
    }),
    save: SampleThunks.generatePost('Troops/post', (resourceData) => {
        return resource.post(resourceData)
    }),
    update: SampleThunks.generatePatch('Troops/put', (updatePayload) => {
        return resource.put(updatePayload.id, updatePayload.resource)
    }),
    delete: SampleThunks.generateDelete('Troops/delete', (troopID) => {
        return resource.delete(troopID)
    })
}
