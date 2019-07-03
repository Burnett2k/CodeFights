#!/bin/bash

if [ $# -eq 0 ]
then
    echo "No arguments supplied, please pass question number as input"
    exit 1
else
    # create directory
    mkdir arcade/$1

    # copy template file and rename
    cp template.js arcade/$1/solution.js

    echo created directory @ arcade/$1/solution.js
fi

