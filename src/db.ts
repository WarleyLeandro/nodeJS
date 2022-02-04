import {Pool} from 'pg'

const connectionString = 'postgres://cctmvlhe:DOA7Cw8qHWPKIgskI-G83H1OaAzmmAOX@motty.db.elephantsql.com/cctmvlhe'

const db = new Pool({connectionString})


export default db