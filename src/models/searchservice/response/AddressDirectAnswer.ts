import { BuiltInFieldType } from './directanswer/BuiltInFieldType';
import { DirectAnswer } from './directanswer/DirectAnswer';

/**
 * A direct answer {@link DirectAnswer} interface with address value.
 *
 * @public
 */
export interface AddressDirectAnswer extends DirectAnswer<Address> {
  fieldType: BuiltInFieldType.Address
}

/**
 * An interface with address fields to use in {@link DirectAnswer.value}.
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