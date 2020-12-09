#!/bin/bash

# This script is meant to be run by CI to verify that the docs are up to date with the source code
# The script should be ran after CI bulds new docs
# If there are any diffs after new docs are generated, they must be out of date

npm run generate-docs
git diff --exit-code

diff_exit_code=$?

if test $diff_exit_code -eq 1
then
  echo "Documentation is out of date. Run 'npm run build' and commit the updated docs."
  exit 1
else
  echo "Documenation is up to date"
fi