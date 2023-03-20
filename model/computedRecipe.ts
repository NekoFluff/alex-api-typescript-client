/**
 * alex-api
 * HTTP server in Go with Swagger endpoints definition. An API for all my hobbies.
 *
 * The version of the OpenAPI document: 0.2.1
 * Contact: alexnou@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { MarketData } from './marketData';

export class ComputedRecipe {
    'outputItem': string;
    'facility': string;
    'numFacilitiesNeeded': number;
    'itemsConsumedPerSec': object;
    'secondsSpentPerCraft': number;
    'craftingPerSecond'?: number;
    'usedFor': string;
    'depth'?: number;
    'action'?: string;
    'quantityProduced'?: number;
    'timeToProduce'?: number;
    'marketData'?: MarketData;
    'image'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "outputItem",
            "baseName": "outputItem",
            "type": "string"
        },
        {
            "name": "facility",
            "baseName": "facility",
            "type": "string"
        },
        {
            "name": "numFacilitiesNeeded",
            "baseName": "numFacilitiesNeeded",
            "type": "number"
        },
        {
            "name": "itemsConsumedPerSec",
            "baseName": "itemsConsumedPerSec",
            "type": "object"
        },
        {
            "name": "secondsSpentPerCraft",
            "baseName": "secondsSpentPerCraft",
            "type": "number"
        },
        {
            "name": "craftingPerSecond",
            "baseName": "craftingPerSecond",
            "type": "number"
        },
        {
            "name": "usedFor",
            "baseName": "usedFor",
            "type": "string"
        },
        {
            "name": "depth",
            "baseName": "depth",
            "type": "number"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "quantityProduced",
            "baseName": "quantityProduced",
            "type": "number"
        },
        {
            "name": "timeToProduce",
            "baseName": "timeToProduce",
            "type": "number"
        },
        {
            "name": "marketData",
            "baseName": "marketData",
            "type": "MarketData"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ComputedRecipe.attributeTypeMap;
    }
}
