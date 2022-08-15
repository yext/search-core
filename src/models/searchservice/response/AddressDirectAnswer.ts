import { FieldValueDirectAnswer } from './FieldValueDirectAnswer';
import { BuiltInFieldType } from './BuiltInFieldType';

/**
 * An interface for direct answers for a {@link FieldValueDirectAnswer} with address values.
 *
 * @public
 */
export interface AddressDirectAnswer extends FieldValueDirectAnswer<Address> {
  fieldType: BuiltInFieldType.Address
}

/**
 * A type interface with address fields to use in {@link FieldValueDirectAnswer.value}.
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