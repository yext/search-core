fs = require('fs');

/**
 * The generate-license-file package includes the core library in the
 * 3rd party notices file. This function removes that license from the
 * file
 */
function removeCoreLicense() {
  const noticesFile = './THIRD-PARTY-NOTICES';

  const noticesFileContents = fs.readFileSync(noticesFile, 'utf8');
  const noticesWithoutCoreLicense = getNoticesWithoutCoreLicense(noticesFileContents);

  fs.writeFileSync(noticesFile, noticesWithoutCoreLicense);
}

/**
 * Removes the core library license from the 3rd party notices file
 * contents and returns the updated file as a string
 *
 * @param {string} fileContents The contents of the 3rd party notices file
 * @returns {string}
 */
function getNoticesWithoutCoreLicense(fileContents) {
  const coreLine = ' - @yext/answers-core';
  const licenseStart = 'The following NPM packages may be included in this product:';
  const divider = '-----------';
  const numNewLinesAfterDivider = 2;

  const indexOfCoreLine = fileContents.indexOf(coreLine);

  if (indexOfCoreLine === -1) {
    return fileContents;
  }

  const startOfCoreLicense = fileContents.lastIndexOf(licenseStart, indexOfCoreLine);
  const endOfCoreLicense =
    fileContents.indexOf(divider, startOfCoreLicense)
    + divider.length
    + numNewLinesAfterDivider;

  const fileBeforeCoreLicense = fileContents.slice(0, startOfCoreLicense);
  const fileAfterCoreLicense = fileContents.slice(endOfCoreLicense);

  return fileBeforeCoreLicense + fileAfterCoreLicense;
}

removeCoreLicense();