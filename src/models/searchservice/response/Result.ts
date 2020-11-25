import HighlightedValue from './HighlightedValue';
import { Source } from './Source';

/**
 * An individual search result
 */
export default interface Result {
  rawData: Record<string, unknown>;
  source: Source;
  index?: number;
  name?: string;
  description?: string;
  link?: string;
  id?: string;
  distance?: number;
  distanceFromFilter?: number;
  highlightedValues?: HighlightedValue[];
  entityType?: string;
}