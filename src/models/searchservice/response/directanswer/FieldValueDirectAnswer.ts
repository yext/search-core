import { UnknownFieldValueDirectAnswer } from './fieldvaluedirectanswers/UnknownFieldValueDirectAnswer';
import { DecimalDirectAnswer } from './fieldvaluedirectanswers/DecimalDirectAnswer';
import { InstagramHandleDirectAnswer } from './fieldvaluedirectanswers/InstagramHandleDirectAnswer';
import { IosAppUrlDirectAnswer } from './fieldvaluedirectanswers/IosAppUrlDirectAnswer';
import { AndroidAppUrlDirectAnswer } from './fieldvaluedirectanswers/AndroidAppUrlDirectAnswer';
import { TwitterHandleDirectAnswer } from './fieldvaluedirectanswers/TwitterHandleDirectAnswer';
import { FacebookUrlDirectAnswer } from './fieldvaluedirectanswers/FacebookUrlDirectAnswer';
import { RichTextDirectAnswer } from './fieldvaluedirectanswers/RichTextDirectAnswer';
import { UrlDirectAnswer } from './fieldvaluedirectanswers/UrlDirectAnswer';
import { TextValueDirectAnswer } from './fieldvaluedirectanswers/TextValueDirectAnswer';

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
