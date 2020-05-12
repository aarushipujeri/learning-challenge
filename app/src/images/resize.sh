#!/bin/bash

FOLDER=$(pwd)

WIDTH=300
HEIGHT=200
find ${FOLDER} -iname '*.jpg' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;

