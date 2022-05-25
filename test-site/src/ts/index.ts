import { provideCore, AnswersConfig, AnswersCore, SandboxEndpoints } from '@yext/answers-core';
import verticalRequest from './requests/verticalRequest';
import universalRequest from './requests/universalRequest';
import questionRequest from './requests/questionRequest';
import { univeralAutocompleteRequest, verticalAutocompleteRequest, filterSearchRequest } from './requests/autocompleteRequests';

const coreConfig: AnswersConfig = {
  apiKey: 'f3cb6746165308853973560db7b61949',
  experienceKey: 'rose_test_sandbox',
  locale: 'en',
  experienceVersion: 'PRODUCTION',
  endpoints: SandboxEndpoints
};

const element = document.createElement('pre');
window.onload = () => {
  document.body.appendChild(element);
};

const globalCore: AnswersCore = provideCore(coreConfig);

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
  element.innerHTML = 'Loading...';
}

function updateUI(data: unknown, startTime: number, msg: string) {
  const latency = new Date().getTime() - startTime + 'ms';
  const dataString = JSON.stringify(data, undefined, 2);
  element.innerHTML = latency + '\n' + dataString;

  console.log(msg);
  console.log(data);
}
