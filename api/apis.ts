export * from './blackDesertOnlineApi';
import { BlackDesertOnlineApi } from './blackDesertOnlineApi';
export * from './dysonSphereProgramApi';
import { DysonSphereProgramApi } from './dysonSphereProgramApi';
export * from './twitterApi';
import { TwitterApi } from './twitterApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [BlackDesertOnlineApi, DysonSphereProgramApi, TwitterApi];
