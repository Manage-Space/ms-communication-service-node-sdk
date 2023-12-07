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

export class CommunicationResponseDto {
    /**
    * Communication id
    */
    'communicationId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "communicationId",
            "baseName": "communicationId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CommunicationResponseDto.attributeTypeMap;
    }
}

