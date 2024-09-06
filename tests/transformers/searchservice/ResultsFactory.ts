import { ResultsFactory } from '../../../src/transformers/searchservice/ResultsFactory';
import { Source } from '../../../src/models/searchservice/response/Source';

it('properly transforms Knowledge Graph results', () => {
  const kgData = [{
    data: {
      id: 'Employee-2116',
      type: 'ce_person',
      website: 'http://www.test.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      name: 'Bob Smith',
      firstName: 'Bob',
      lastName: 'Smith',
    },
    highlightedFields: {},
    distance: 36032,
    distanceFromFilter: 3821
  }];
  const expectedResults = [{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    distance: 36032,
    distanceFromFilter: 3821,
    entityType: 'ce_person',
    highlightedFields: {},
    id: 'Employee-2116',
    index: 1,
    link: 'http://www.test.com',
    name: 'Bob Smith',
    rawData: {
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      firstName: 'Bob',
      id: 'Employee-2116',
      lastName: 'Smith',
      name: 'Bob Smith',
      type: 'ce_person',
      website: 'http://www.test.com',
    },
    source: 'KNOWLEDGE_MANAGER',
  }];

  const actualResults = ResultsFactory.create(kgData, Source.KnowledgeManager);
  expect(expectedResults).toMatchObject(actualResults);
});

it('properly transforms Google Custom Search results', () => {
  const googleData = [{
    displayLink: 'www.yext.com',
    htmlSnippet: '<b>Yext</b> is improving the online search experiences',
    htmlTitle: 'Yext',
    link: 'https://www.yext.com/'
  }];

  const expectedResults = [{
    description: '<b>Yext</b> is improving the online search experiences',
    index: 1,
    link: 'https://www.yext.com/',
    name: 'Yext',
    rawData: {
      displayLink: 'www.yext.com',
      htmlSnippet: '<b>Yext</b> is improving the online search experiences',
      htmlTitle: 'Yext',
      link: 'https://www.yext.com/',
    },
    source: 'GOOGLE_CSE',
  }];

  const actualResults = ResultsFactory.create(googleData, Source.Google);
  expect(expectedResults).toMatchObject(actualResults);
});

it('properly transforms backend results from custom source', () => {
  const genericData = [{
    data: {
      answer: 'You should still self\-quarantine for 14 days since your last exposure.',
      c_organization: 'CDC',
      id: 'iwasaroundsomeonewhohascovid19andmycovid19testcame',
      keywords: ['covid', 'COVID-19', 'Coronavirus'],
      website: 'https://www.cdc.gov/coronavirus/2019-ncov/faq.html',
      name: 'Do I still need to quarantine for 14 days?',
      type: 'faq',
      description: 'COVID question'
    },
    highlightedFields: {}
  }];

  const expectedResults = [{
    description: 'COVID question',
    id: 'iwasaroundsomeonewhohascovid19andmycovid19testcame',
    index: 1,
    link: 'https://www.cdc.gov/coronavirus/2019-ncov/faq.html',
    name: 'Do I still need to quarantine for 14 days?',
    rawData: {
      answer: 'You should still self-quarantine for 14 days since your last exposure.',
      c_organization: 'CDC',
      id: 'iwasaroundsomeonewhohascovid19andmycovid19testcame',
      keywords: ['covid', 'COVID-19', 'Coronavirus'],
      website: 'https://www.cdc.gov/coronavirus/2019-ncov/faq.html',
      name: 'Do I still need to quarantine for 14 days?',
      type: 'faq',
      description: 'COVID question'
    },
    source: Source.Custom
  }];

  const actualResults = ResultsFactory.create(genericData, Source.Custom);
  expect(expectedResults).toMatchObject(actualResults);
});
