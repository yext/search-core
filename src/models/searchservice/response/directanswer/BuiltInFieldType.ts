/**
 * Possible built-in field types for {@link DirectAnswer.fieldType}.
 *
 * @public
 */
export enum BuiltInFieldType {
  URL = 'url',
  ComplexURL = 'complex_url',
  IOSAppURL = 'ios_app_url',
  AndroidAppURL = 'android_app_url',
  FacebookURL = 'facebook_url',
  Email = 'email',
  InstagramHandle = 'instagram_handle',
  TwitterHandle = 'twitter_handle',
  Phone = 'phone',
  Address = 'address',
  Hours = 'hours',
  Decimal = 'decimal',
  Integer = 'integer',
  SingleLineText = 'single_line_text',
  RichText = 'rich_text',
  MultiLineText = 'multi_line_text'
}