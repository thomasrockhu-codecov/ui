#!/bin/bash

if [[ -n $1 ]]
then
    echo "STORYBOOK_DIRECTORY=$1"
    export STORYBOOK_DIRECTORY=$1
fi

# --no-dll is required to make popper-react work with storybook because storybook has the same dependency with older version
yarn start-storybook -p 6006 -s ./static --no-dll
