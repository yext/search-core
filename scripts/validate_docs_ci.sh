#!/bin/bash

# This script is meant to be run by CI to verify that the docs are up to date with the source code
# It works by generating docs and using git diff to see if there are any changes
# This script will also fail if the api report is out of date

npm run api-extractor-ci
git diff --exit-code

diff_exit_code=$?

if test $diff_exit_code -eq 1
then
  echo "Documentation is out of date. Run 'npm run build' and commit the updated docs."
  exit 1
else
  echo "Documenation is up to date"
fi