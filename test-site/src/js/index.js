/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { provideCore } from '@yext/answers-core';
import verticalRequest from './requests/verticalRequest';
import universalRequest from './requests/universalRequest';
import questionRequest from './requests/questionRequest';
import { univeralAutocompleteRequest, verticalAutocompleteRequest, filterSearchRequest } from './requests/autoCompleteRequests';

const coreConfig = {
  apiKey: 'df4b24f4075800e5e9705090c54c6c13',
  experienceKey: 'rosetest',
  locale: 'en',
  experienceVersion: 'PRODUCTION',
};

const element = document.createElement('pre');
window.onload = () => {
  document.body.appendChild(element);
};

let globalCore = provideCore(coreConfig);

export async function universalSearch() {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.universalSearch(universalRequest);
  updateUI(data, startTime, 'Core Universal Response:', );
}

export async function verticalSearch() {
  loadingSpinner();
  const startTime = new Date().getTime();
  const results = await globalCore.verticalSearch(verticalRequest);
  updateUI(results, startTime, 'Core Vertical Response:');
}

export async function submitQuestion() {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.submitQuestion(questionRequest);
  updateUI(data, startTime, 'Core QA Submission Response:');
}

export async function universalAutocomplete() {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.universalAutocomplete(univeralAutocompleteRequest);
  updateUI(data, startTime, 'Core Universal Autocomplete Response:');
}

export async function verticalAutocomplete() {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.verticalAutocomplete(verticalAutocompleteRequest);
  updateUI(data, startTime, 'Core Vertical Autocomplete Response:');
}

export async function filterSearch() {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.filterSearch(filterSearchRequest);
  updateUI(data, startTime, 'Core Filter Autocomplete Response:');
}

function loadingSpinner() {
  element.innerHTML = 'Loading...';
}

function updateUI(data, startTime, msg) {
  const latency = new Date().getTime() - startTime + 'ms';
  const dataString = JSON.stringify(data, undefined, 2);
  element.innerHTML = latency + '\n' + dataString;

  console.log(msg);
  console.log(data);
}
