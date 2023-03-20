/**
 * alex-api
 * HTTP server in Go with Swagger endpoints definition. An API for all my hobbies.
 *
 * The version of the OpenAPI document: 0.2.2
 * Contact: alexnou@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class MarketData {
    'marketDataID'?: string;
    'lastUpdateAttempt'?: number;
    'lastUpdated'?: number;
    'price'?: number;
    'quantity'?: number;
    'totalTradeCount'?: number;
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "marketDataID",
            "baseName": "marketDataID",
            "type": "string"
        },
        {
            "name": "lastUpdateAttempt",
            "baseName": "lastUpdateAttempt",
            "type": "number"
        },
        {
            "name": "lastUpdated",
            "baseName": "lastUpdated",
            "type": "number"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "totalTradeCount",
            "baseName": "totalTradeCount",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MarketData.attributeTypeMap;
    }
}

