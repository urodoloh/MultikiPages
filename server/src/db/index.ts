import {databaseTypes, animePageTypes} from '../types/types'

let dbs = require('./db.json' );

const db: animePageTypes[] = dbs.anime;

export {db};