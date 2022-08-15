import { BuiltInFieldType } from './directanswer/BuiltInFieldType';
import { DirectAnswer } from './directanswer/DirectAnswer';

/**
 * An interface for direct answers for a {@link DirectAnswer} with address values.
 *
 * @public
 */
export interface AddressDirectAnswer extends DirectAnswer<Address> {
  fieldType: BuiltInFieldType.Address
}

/**
 * A type interface with address fields to use in {@link DirectAnswer.value}.
 *
 * @public
 */
export interface Address {
  line1?: string,
  line2?: string,
  line3?: string,
  sublocality?: string,
  city?: string,
  region?: string,
  postalCode?: string,
  extraDescription?: string,
  countryCode?: string
}