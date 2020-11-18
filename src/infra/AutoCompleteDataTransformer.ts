import AutoCompleteData from '../models/autocompleteservice/AutoCompleteData';

/**
 * A Data Transformer that takes the response object from a AutoComplete request
 * And transforms in to a front-end oriented data structure that our
 * component library and core storage understand.
 */
export default class AutoCompleteDataTransformer {
  static universal(response: any): AutoCompleteData {
    return AutoCompleteData.from(response);
  }

  static filter(response: any): AutoCompleteData {
    return AutoCompleteData.from(response);
  }

  static vertical(response: any): AutoCompleteData {
    return AutoCompleteData.from(response);
  }
}