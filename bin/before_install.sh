#!/bin/bash

cd ../

cd app/config
rm 'settings.js'
mv 'settings'+$env+'.js' 'settings.js'