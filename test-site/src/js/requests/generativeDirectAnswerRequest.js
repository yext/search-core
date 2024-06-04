const generativeDirectAnswerRequest = {
  searchId: '018f5ddc-ef70-2c66-a9c2-62fb5444967d',
  searchTerm: 'burger sellers',
  results: {
    'appliedQueryFilters': [],
    'queryDurationMillis': 141,
    'results': [
      {
        'description': 'Welcome to our burger shop! Our delicious burgers are made with the finest ingredients and cooked to perfection. Each bite is a burst of flavor that will leave you craving for more. Come and experience the ultimate burger experience at [entity name]!',
        'distance': 608,
        'entityType': 'restaurant',
        'id': '3397989546397245794',
        'index': 1,
        'name': 'Bobert\'s Burgers',
        'rawData': {
          'address': {
            'city': 'Arlington',
            'countryCode': 'US',
            'line1': '1101 Wilson Blvd',
            'postalCode': '22201',
            'region': 'VA'
          },
          'id': '3397989546397245794',
          'name': 'Bobert\'s Burgers',
          's_snippet': 'Welcome to our burger shop! Our delicious burgers are made with the finest ingredients and cooked to perfection. Each bite is a burst of flavor that will leave you craving for more. Come and experience the ultimate burger experience at [entity name]!',
          'type': 'restaurant',
          'uid': '8147322'
        },
        'source': 'KNOWLEDGE_MANAGER'
      },
      {
        'distance': 608,
        'entityType': 'restaurant',
        'id': '8875293274284117370',
        'index': 2,
        'name': 'Cow Burgers',
        'rawData': {
          'address': {
            'city': 'Arlington',
            'countryCode': 'US',
            'line1': '1101 Wilson Blvd',
            'postalCode': '22209',
            'region': 'VA'
          },
          'id': '8875293274284117370',
          'name': 'Cow Burgers',
          'timezone': 'America/New_York',
          'type': 'restaurant',
          'uid': '8279393'
        },
        'source': 'KNOWLEDGE_MANAGER'
      }
    ],
    'resultsCount': 2,
    'source': 'KNOWLEDGE_MANAGER',
    'verticalKey': 'restaurants'
  },
};

export default generativeDirectAnswerRequest;