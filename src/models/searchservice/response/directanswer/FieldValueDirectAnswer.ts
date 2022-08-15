import { AndroidAppUrlDirectAnswer, DecimalDirectAnswer, FacebookUrlDirectAnswer, InstagramHandleDirectAnswer, IosAppUrlDirectAnswer, RichTextDirectAnswer, TextValueDirectAnswer, TwitterHandleDirectAnswer, UrlDirectAnswer } from './StringValueDirectAnswer';
import { UnknownFieldValueDirectAnswer } from './UnknownFieldValueDirectAnswer';

/**
 * Possible built-in and custom {@link BaseFieldValueDirectAnswer} interfaces.
 *
 * @public
 */
export type FieldValueDirectAnswer =
  UnknownFieldValueDirectAnswer |
  TextValueDirectAnswer |
  UrlDirectAnswer |
  RichTextDirectAnswer |
  DecimalDirectAnswer |
  FacebookUrlDirectAnswer |
  InstagramHandleDirectAnswer |
  TwitterHandleDirectAnswer |
  IosAppUrlDirectAnswer |
  AndroidAppUrlDirectAnswer;
