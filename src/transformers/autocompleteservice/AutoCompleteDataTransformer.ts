import AutoCompleteData from '../../models/autocompleteservice/AutoCompleteData';

/**
 * A Data Transformer that takes the response object from a AutoComplete request
 * and transforms in to an {@link AutoCompleteData} model.
 */
export default class AutoCompleteDataTransformer {
  static universal(response: any): AutoCompleteData {
    const responseJson = response.json();
    return AutoCompleteData.from(responseJson);
  }

  static filter(response: any): AutoCompleteData {
    const responseJson = response.json();
    return AutoCompleteData.from(responseJson);
  }

  static vertical(response: any): AutoCompleteData {
    const responseJson = response.json();
    return AutoCompleteData.from(responseJson);
  }
}