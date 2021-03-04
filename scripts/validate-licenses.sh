#!/bin/bash

# This script verifies that the 3rd party licenses file is up to date with package.json
# The script should be ran after new licenses are generated
# If there are any git diffs after new docs are generated, the docs are out of date

git diff --exit-code > /dev/null # send stdout to /dev/null to reduce clutter in the CI output

diff_exit_code=$?

if test $diff_exit_code -eq 1
then
  echo "The 3rd party licenses file is out of date. Run 'npm run build' and commit the updated docs."
  exit 1
else
  echo "The 3rd party licenses file is up to date"
fi