#!/bin/sh
set -e

if [ -z ${CI} ];
then
    husky install
else 
    echo 'skip postinstall in CI'
fi