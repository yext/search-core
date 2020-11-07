export default class Facet {
  constructor () {

  }

  static fromArray (facets: any): [Facet] {
    return facets.map((facet: any) => {
      return new Facet();
    })
  }
}