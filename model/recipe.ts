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

export class Recipe {
    'outputItem': string;
    'outputItemCount': number;
    'facility': string;
    'time': number;
    'materials': { [key: string]: string; };
    'image'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "outputItem",
            "baseName": "outputItem",
            "type": "string"
        },
        {
            "name": "outputItemCount",
            "baseName": "outputItemCount",
            "type": "number"
        },
        {
            "name": "facility",
            "baseName": "facility",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "materials",
            "baseName": "materials",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Recipe.attributeTypeMap;
    }
}

