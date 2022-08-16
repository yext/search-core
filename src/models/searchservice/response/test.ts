import { EnumOrLiteral } from "../../utils/EnumOrLiteral";
import { AddressFieldValueDirectAnswer } from "./AddressFieldValueDirectAnswer";
import { DirectAnswerType } from './directanswer/DirectAnswerType';
import { Source } from './Source'

let test: AddressFieldValueDirectAnswer = {
    type: DirectAnswerType.FieldValue,
    value: {
        line1: 'string',
        city: 'string',
        region: 'string',
        postalCode: 'string',
    },
    entityName: 'string',
    /** The field name of the direct answer. */
    fieldName: 'string',
    /** The field api name of the direct answer. */
    fieldApiName: 'string',

    fieldType: 'address',
    relatedResult: {
        rawData: {},
        source: Source.Google
    },
  /** The vertical key of the direct answer. */
    verticalKey: 'string'
    /** The field type of the direct answer. */
}