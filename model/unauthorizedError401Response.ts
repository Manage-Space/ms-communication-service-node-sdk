/**
 * ManageSpace Communication API
 * ManageSpace Communication API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';

export class UnauthorizedError401Response {
    'data': Array<string>;
    'success': boolean;
    'error': UnauthorizedError401ResponseError;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<string>"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "UnauthorizedError401ResponseError"
        }    ];

    static getAttributeTypeMap() {
        return UnauthorizedError401Response.attributeTypeMap;
    }
}

