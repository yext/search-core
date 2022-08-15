import { EnumOrLiteral } from '../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from './BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from './BuiltInFieldType';

/**
 * A direct answer whose source is a string or string list field in the knowledge graph.
 *
 * @public
 */
export interface TextValueDirectAnswer extends BaseFieldValueDirectAnswer<string | string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.SingleLineText | BuiltInFieldType.MultiLineText>
}

/**
 * A direct answer for a simple url field.
 *
 * @public
 */
export interface UrlDirectAnswer extends BaseFieldValueDirectAnswer<string | string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.URL>
}

/**
 * A direct answer for a rich text field.
 *
 * @public
 */
export interface RichTextDirectAnswer extends BaseFieldValueDirectAnswer<string | string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.RichText>
}

/**
 * A direct answer for a decimal field, which is a number represented using a string.
 *
 * @public
 */
export interface DecimalDirectAnswer extends BaseFieldValueDirectAnswer<string | string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.Decimal>
}

/**
 * A direct answer for a facebook url field.
 *
 * @public
 */
export interface FacebookUrlDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: EnumOrLiteral<BuiltInFieldType.FacebookURL>
}

/**
 * A direct answer for an instagram handle field.
 *
 * @public
 */
export interface InstagramHandleDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: EnumOrLiteral<BuiltInFieldType.InstagramHandle>
}

/**
 * A direct answer for an twitter handle field.
 *
 * @public
 */
export interface TwitterHandleDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: EnumOrLiteral<BuiltInFieldType.TwitterHandle>
}

/**
 * A direct answer for an iOS app url field.
 *
 * @public
 */
export interface IosAppUrlDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: EnumOrLiteral<BuiltInFieldType.IOSAppURL>
}

/**
 * A direct answer for an android app url field.
 *
 * @public
 */
export interface AndroidAppUrlDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: EnumOrLiteral<BuiltInFieldType.AndroidAppURL>
}