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

export class CreateCommunicationRequest {
    /**
    * Communication method.
    */
    'communicationMethod': CreateCommunicationRequest.CommunicationMethodEnum;
    /**
    * Communication type.
    */
    'communicationType': CreateCommunicationRequest.CommunicationTypeEnum;
    /**
    * Metadata.
    */
    'metaData': object;
    /**
    * Created by
    */
    'createdBy': string;
    /**
    * Workflow id
    */
    'workflowId'?: string;
    /**
    * The email/number to send the communication to.
    */
    'recipient'?: string;
    /**
    * Role.
    */
    'recipientRole'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "communicationMethod",
            "baseName": "communicationMethod",
            "type": "CreateCommunicationRequest.CommunicationMethodEnum"
        },
        {
            "name": "communicationType",
            "baseName": "communicationType",
            "type": "CreateCommunicationRequest.CommunicationTypeEnum"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "object"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        },
        {
            "name": "workflowId",
            "baseName": "workflowId",
            "type": "string"
        },
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string"
        },
        {
            "name": "recipientRole",
            "baseName": "recipientRole",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateCommunicationRequest.attributeTypeMap;
    }
}

export namespace CreateCommunicationRequest {
    export enum CommunicationMethodEnum {
        Email = <any> 'email',
        Sms = <any> 'sms'
    }
    export enum CommunicationTypeEnum {
        MoveOutConfirmation = <any> 'moveOutConfirmation',
        ReservationConfirmation = <any> 'reservationConfirmation',
        DelinquencyLate = <any> 'delinquencyLate',
        DelinquencyOverlocked = <any> 'delinquencyOverlocked',
        DelinquencyLien = <any> 'delinquencyLien',
        DelinquencyAuction = <any> 'delinquencyAuction'
    }
}
