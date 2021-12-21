#!/bin/bash

if [[ ${CI} ]]
then
    echo 'skip postinstall in CI'
else 
    husky install
fi