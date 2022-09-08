import { BuiltInFieldType } from '../BuiltInFieldType';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';

/**
 * A {@link BaseFieldValueDirectAnswer} interface with 'hours' field type.
 *
 * @public
 */
export interface HoursDirectAnswer extends BaseFieldValueDirectAnswer<Hours|Hours[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.Hours>
}

/**
 * An interface for hours fields to use in {@link BaseFieldValueDirectAnswer.value}.
 *
 * @public
 */
export interface Hours {
  monday?: DayHour,
  tuesday?: DayHour,
  wednesday?: DayHour,
  thursday?: DayHour,
  friday?: DayHour,
  saturday?: DayHour,
  sunday?: DayHour,
  holidayHours?: HolidayHours[],
  reopenDate?: string
}

/**
 * An interface for a day's hours to use in {@link BaseFieldValueDirectAnswer.value}.
 *
 * @public
 */
export interface DayHour {
  openIntervals?: Interval[],
  isClosed?: boolean
}

/**
 * An interface for holiday hours to use in {@link BaseFieldValueDirectAnswer.value}.
 *
 * @public
 */
export interface HolidayHours {
  date: string,
  openIntervals?: Interval[],
  isClosed?: boolean,
  isRegularHours?: boolean
}

/**
 * An interface for a time interval to use in {@link BaseFieldValueDirectAnswer.value}.
 *
 * @public
 */
export interface Interval {
  start?: string,
  end?: string
}
