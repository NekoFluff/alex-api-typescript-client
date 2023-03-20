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

export class ComputedRecipeRequest {
    'name': string;
    'rate': number;
    'requirements'?: { [key: string]: number; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "rate",
            "baseName": "rate",
            "type": "number"
        },
        {
            "name": "requirements",
            "baseName": "requirements",
            "type": "{ [key: string]: number; }"
        }    ];

    static getAttributeTypeMap() {
        return ComputedRecipeRequest.attributeTypeMap;
    }
}

