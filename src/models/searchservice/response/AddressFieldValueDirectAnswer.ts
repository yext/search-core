import { BuiltInFieldType } from './directanswer/BuiltInFieldType';
import { BaseFieldValueDirectAnswer } from './directanswer/BaseFieldValueDirectAnswer';

/**
 * A {@link BaseFieldValueDirectAnswer} interface with 'address' field type.
 *
 * @public
 */
export interface AddressFieldValueDirectAnswer extends BaseFieldValueDirectAnswer<Address> {
  fieldType: BuiltInFieldType.Address
}

/**
 * An interface with address fields to use in {@link BaseFieldValueDirectAnswer.value}.
 *
 * @public
 */
export interface Address {
  line1: string,
  line2?: string,
  line3?: string,
  sublocality?: string,
  city: string,
  region: string,
  postalCode: string,
  extraDescription?: string,
  countryCode?: string
}