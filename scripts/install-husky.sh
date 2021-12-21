#!/bin/sh
set -e

if [ -z ${CI} ];
then
    husky install
else 
    echo 'skip husky install in CI'
fi