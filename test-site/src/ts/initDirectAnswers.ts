import { BuiltInFieldType, DirectAnswerType } from '@yext/search-core';
import { directAnswer } from './index';

/**
 * The comments denote the expected {@link DirectAnswer.value} type.
 */
const FEATURED_SNIPPET_QUERIES = {
  [BuiltInFieldType.MultiLineText]: [
    'what is oliver shi’s birthday', // string
    'who is chihaya ayase' // string
  ],
  [BuiltInFieldType.RichText]: [
    'how to rich text' // no value
  ]
};
const FIELD_VALUE_QUERIES = {
  [BuiltInFieldType.URL]: [
    'what is Abington\'s myurl ', // string
    'what are oliver shi\'s list of urls?' // string[]
  ],
  [BuiltInFieldType.SingleLineText]: [
    'Abington Services Offered' // string[]
  ],
  [BuiltInFieldType.Decimal]: [
    'oliver shi popularity', // string
    'what are oliver shi\'s favorite numbers?' // string[]
  ],
  [BuiltInFieldType.AndroidAppURL]: [
    'what is oliver shi\'s android app url?' // string
  ],
  [BuiltInFieldType.FacebookURL]: [
    'what is oliver shi\'s facebook url?' // string
  ],
  [BuiltInFieldType.IOSAppURL]: [
    'what is oliver shi\'s ios app url?' // string
  ],
  [BuiltInFieldType.InstagramHandle]: [
    'what is oliver shi\'s instagram handle?' // string
  ],
  [BuiltInFieldType.TwitterHandle]: [
    'what is oliver shi\'s twitter handle?' // string
  ],
  [BuiltInFieldType.RichText]: [
    'oliver shi my rich text field', // string
    'oliver shi multi line rich text' // string[]
  ],
};

export default function initDirectAnswers() {
  const selectEl = document.getElementById('directAnswers');
  if (!(selectEl instanceof HTMLSelectElement)) {
    console.error('no select el found');
    return;
  }
  const possibleQueries = [
    ...Object.values(FEATURED_SNIPPET_QUERIES).flatMap(v => v),
    ...Object.values(FIELD_VALUE_QUERIES).flatMap(v => v)
  ];

  possibleQueries.forEach(q => {
    const optionEl = document.createElement('option');
    optionEl.innerText = q;
    selectEl.appendChild(optionEl);
  });

  selectEl.addEventListener('change', async e => {
    const val = (e.target as HTMLSelectElement).value;
    const res = await directAnswer(val);
    const da = res.directAnswer;
    if (da.type !== DirectAnswerType.FieldValue) return;
    switch (da.fieldType) {
      case BuiltInFieldType.AndroidAppURL:
        console.log(da.value);
        break;
      case BuiltInFieldType.Decimal:
        console.log(da.value);
        break;
      case BuiltInFieldType.FacebookURL:
        console.log(da.value);
        break;
      case BuiltInFieldType.IOSAppURL:
        console.log(da.value);
        break;
      case BuiltInFieldType.InstagramHandle:
        console.log(da.value);
        break;
      case BuiltInFieldType.MultiLineText:
        console.log(da.value);
        break;
      // case BuiltInFieldType.Phone:
      //   console.log(da.fieldType);
      //   break;
      case BuiltInFieldType.RichText:
        console.log(da.value);
        break;
      case BuiltInFieldType.SingleLineText:
        console.log(da.value);
        break;
      case BuiltInFieldType.TwitterHandle:
        console.log(da.value);
        break;
      case BuiltInFieldType.URL:
        console.log(da.value);
        break;
    }
  });
}
