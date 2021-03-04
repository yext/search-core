const licenseGenerator = require('generate-license-file');
const fs = require('fs');

const EOL = '\n';
const BULLET = ' - ';
const PREFIX = 'The following NPM package is included in this product:' + EOL + EOL;
const PREFIX_PLURAL = 'The following NPM packages are be included in this product:' + EOL + EOL;
const MIDFIX = EOL + 'This package contains the following license and notice below:' + EOL + EOL;
const MIDFIX_PLURAL = EOL + 'These packages each contain the following license and notice below:' + EOL + EOL;
const SUFFIX = EOL + EOL + '-----------' + EOL + EOL;

const projectDir = './';
const outputPath = 'THIRD-PARTY-NOTICES';

generateLicenseFile(projectDir, outputPath);

// This script is based on tobysmith568/Generate-License-File from
// https://github.com/tobysmith568/Generate-License-File/blob/42dcb8d61fbaaf5d01c15b81c83a92fe190def3e/src/main.ts

/**
 * Scans the project found at the given path and creates a license file at the given output location
 * @param path A path to a directory containing a package.json
 * @param outputPath A file path for the resulting license file
 */
async function generateLicenseFile(path, outputPath) {
  let licenses = await licenseGenerator.getProjectLicenses(path);

  licenses = licenses.filter(license => {
    const firstDependency = license.dependencies[0];
    const isCoreLibrary = firstDependency.includes('@yext/answers-core');

    return !isCoreLibrary;
  });

  const stream = fs.createWriteStream(outputPath, {
    encoding: 'utf-8',
    flags: 'w+'
  });

  stream.once('open', () => {
    for (const license of licenses) {
      const hasMultipleDeps = license.dependencies.length > 1;
      stream.write(hasMultipleDeps ? PREFIX_PLURAL : PREFIX);

      for (const dep of license.dependencies) {
        stream.write(BULLET);
        stream.write(dep);
        stream.write(EOL);
      }

      stream.write(hasMultipleDeps ? MIDFIX_PLURAL : MIDFIX);
      stream.write(license.content.trim());
      stream.write(SUFFIX);
    }

    stream.end();
  });
}