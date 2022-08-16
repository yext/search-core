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
  IntegerDirectAnswer
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
  IntegerDirectAnswer;
