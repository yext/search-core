/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { provideCore } from '@yext/search-core';
import { verticalRequest, functionVerticalRequest, locationsVerticalRequest } from './requests/verticalRequest';
import universalRequest from './requests/universalRequest';
import questionRequest from './requests/questionRequest';
import { univeralAutocompleteRequest, verticalAutocompleteRequest, filterSearchRequest } from './requests/autocompleteRequests';
import generativeDirectAnswerRequest from './requests/generativeDirectAnswerRequest';

const coreConfig = {
  apiKey: process.env.API_KEY,
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

export async function generativeDirectAnswer() {
  loadingSpinner();
  const startTime = new Date().getTime();
  const data = await globalCore.generativeDirectAnswer(generativeDirectAnswerRequest);
  updateUI(data, startTime, 'Core Generative Direct Answer Response:');
}

export async function functionVerticalSearch() {
  loadingSpinner();
  const startTime = new Date().getTime();
  const results = await globalCore.verticalSearch(functionVerticalRequest);
  updateUI(results, startTime, 'Core Function Vertical Response:');
}

export async function locationsVerticalSearch() {
  loadingSpinner();
  const startTime = new Date().getTime();
  const results = await globalCore.verticalSearch(locationsVerticalRequest);
  updateUI(results, startTime, 'Locations Vertical Response:');
}

function loadingSpinner() {
  element.textContent = 'Loading...';
}

function updateUI(data, startTime, msg) {
  const latency = new Date().getTime() - startTime + 'ms';
  const dataString = JSON.stringify(data, undefined, 2);
  element.textContent = latency + '\n' + dataString;

  console.log(msg);
  console.log(data);
}
