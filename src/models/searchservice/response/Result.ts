import HighlightedValue from './HighlightedValue';

/**
 * An individual search result
 */
export default interface Result {
  rawData: Record<string, unknown>;
  index?: number;
  name?: string;
  description?: string;
  link?: string;
  id?: string;
  distance?: number;
  distanceFromFilter?: number;
  highlightedValues?: HighlightedValue[];
  type?: string;
}