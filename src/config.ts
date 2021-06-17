import { Soc } from './types'

declare let process: {
    env: {
        PRODUCTION: string
        API_ENDPOINT: string
        LOG_REMOTE_URL: string
        LOG_LEVEL: Soc.LogLevels
    }
}

const c: Soc.Config = {
    api: process.env.API_ENDPOINT,
    development: process.env.PRODUCTION !== 'true',
    log: {
        remoteUrl: process.env.LOG_REMOTE_URL,
        level: process.env.LOG_LEVEL
    }
}

export default c
