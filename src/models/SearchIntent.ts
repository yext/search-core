export default class SearchIntent {
  nearMe: boolean;

  constructor (props: SearchIntent) {
    this.nearMe = props.nearMe;
  }

  static from (data: any) {
    return new SearchIntent({
      nearMe: data.includes('NEAR_ME')
    });
  }
}