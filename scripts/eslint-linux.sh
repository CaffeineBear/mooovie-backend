LIST=`git diff-index --name-only --diff-filter=d HEAD | grep .*\\.js | grep -v json`; if [ \"$LIST\" ]; then npx eslint $LIST; fi
