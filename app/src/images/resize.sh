#!/bin/bash

FOLDER=$(pwd)

WIDTH=200
HEIGHT=200

find ${FOLDER} -iname '*.jpg' -exec convert \{} -verbose -resize $WIDTHx$HEIGHT\> \{} \;

