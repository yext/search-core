import {
  UnknownFieldValueDirectAnswer,
  DecimalDirectAnswer,
  InstagramHandleDirectAnswer,
  IosAppUrlDirectAnswer,
  AndroidAppUrlDirectAnswer,
  TwitterHandleDirectAnswer,
  FacebookUrlDirectAnswer,
  RichTextDirectAnswer,
  UrlDirectAnswer,
  TextDirectAnswer,
  ComplexUrlDirectAnswer,
  IntegerDirectAnswer,
  PhoneDirectAnswer,
  EmailDirectAnswer,
  AddressDirectAnswer,
  HoursDirectAnswer
} from './fieldvaluedirectanswers';

/**
 * Possible built-in and custom {@link BaseFieldValueDirectAnswer} interfaces.
 *
 * @public
 */
export type FieldValueDirectAnswer =
  UnknownFieldValueDirectAnswer |
  TextDirectAnswer |
  UrlDirectAnswer |
  RichTextDirectAnswer |
  DecimalDirectAnswer |
  FacebookUrlDirectAnswer |
  InstagramHandleDirectAnswer |
  TwitterHandleDirectAnswer |
  IosAppUrlDirectAnswer |
  AndroidAppUrlDirectAnswer |
  ComplexUrlDirectAnswer |
  IntegerDirectAnswer |
  PhoneDirectAnswer |
  EmailDirectAnswer |
  AddressDirectAnswer |
  HoursDirectAnswer;
