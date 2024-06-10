import { provideCore, SearchConfig, SearchCore, UniversalSearchRequest, UniversalSearchResponse } from '@yext/search-core';
import verticalRequest from './requests/verticalRequest';
import universalRequest from './requests/universalRequest';
import questionRequest from './requests/questionRequest';
import { univeralAutocompleteRequest, verticalAutocompleteRequest, filterSearchRequest } from './requests/autocompleteRequests';
import initDirectAnswers from './initDirectAnswers';

const coreConfig: SearchConfig = {
  apiKey: process.env.API_KEY,
  experienceKey: 'slanswers',
  locale: 'en',
  experienceVersion: 'PRODUCTION',
};

const element = document.createElement('pre');
window.onload = () => {
  document.body.appendChild(element);
  initDirectAnswers();
};

const globalCore: SearchCore = provideCore(coreConfig);

export async function directAnswer(query: string): Promise<UniversalSearchResponse> {
  loadingSpinner();
  const startTime = new Date().getTime();
  const req: UniversalSearchRequest = { query };
  const res: UniversalSearchResponse = await globalCore.universalSearch(req);
  updateUI(res.directAnswer, startTime, 'Universal Direct Answer Response:');
  return res;
}

export async function universalSearch(): Promise<void> {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.universalSearch(universalRequest);
  updateUI(data, startTime, 'Core Universal Response:', );
}

export async function verticalSearch(): Promise<void> {
  loadingSpinner();
  const startTime = new Date().getTime();
  const results = await globalCore.verticalSearch(verticalRequest);
  updateUI(results, startTime, 'Core Vertical Response:');
}

export async function submitQuestion(): Promise<void> {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.submitQuestion(questionRequest);
  updateUI(data, startTime, 'Core QA Submission Response:');
}

export async function universalAutocomplete(): Promise<void> {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.universalAutocomplete(univeralAutocompleteRequest);
  updateUI(data, startTime, 'Core Universal Autocomplete Response:');
}

export async function verticalAutocomplete(): Promise<void> {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.verticalAutocomplete(verticalAutocompleteRequest);
  updateUI(data, startTime, 'Core Vertical Autocomplete Response:');
}

export async function filterSearch(): Promise<void> {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.filterSearch(filterSearchRequest);
  updateUI(data, startTime, 'Core Filter Autocomplete Response:');
}

function loadingSpinner() {
  element.textContent = 'Loading...';
}

function updateUI(data: unknown, startTime: number, msg: string) {
  const latency = new Date().getTime() - startTime + 'ms';
  const dataString = JSON.stringify(data, undefined, 2);
  element.textContent = latency + '\n' + dataString;

  console.log(msg);
  console.log(data);
}
